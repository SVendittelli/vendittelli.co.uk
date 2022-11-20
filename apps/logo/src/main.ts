import { writeFileSync } from 'fs';

/** dragonCurve :: [[Int]] -> [[Int]] */
const dragonCurve = (xs: number[][]): number[][] => {
  const pivot = (operation) => map(zipWith(operation)(last(xs)));
  const r90 = [
    [0, -1],
    [1, 0],
  ];

  return compose(
    append(xs),
    pivot(add),
    flip(matrixMultiply)(r90),
    pivot(subtract),
    reverse,
    init
  )(xs);
};

/**
 * svgFromPointLists :: Int -> Int -> [[(Int, Int)]] -> String
 */
const svgFromPointLists =
  (width: number, height: number, iterations: number) =>
  (listOfCoordinateLists: ITuple<number, number>[][]) => {
    const svg = (attributes: string[] = []) =>
      joinWithSpaces([
        '<svg',
        'xmlns="http://www.w3.org/2000/svg"',
        'version="1.1"',
        'xmlns:xlink="http://www.w3.org/1999/xlink"',
        'xmlns:svgjs="http://svgjs.com/svgjs"',
        `width="${width}" height="${height}"`,
        ...attributes,
        '>',
      ]);
    const polyline = (xs) =>
      `<polyline id="curve" stroke-width="0.7" fill="none" points="${joinWithSpaces(
        concat(xs).map(showJSON)
      )}"/>`;

    const rotate = (times: number, { x, y }: { x: number; y: number }) => {
      if (times === 0) return { x, y };
      return rotate(times - 1, {
        x: x - y,
        y: y + x,
      });
    };
    const { x: xTrans, y: yTrans } = rotate(iterations, { x: 0, y: 1 });

    const [x1Min, y1Min, x1Max, y1Max] = ap([minimum, maximum])(
      Array.from(unzip(concat(listOfCoordinateLists)))
    );
    const [x2Min, y2Min, x2Max, y2Max] = [
      -x1Max - xTrans,
      -y1Max - yTrans,
      -x1Min - xTrans,
      -y1Min - yTrans,
    ];

    const [xMin, yMin, xMax, yMax] = [
      Math.min(x1Min, x2Min),
      Math.min(y1Min, y2Min),
      Math.max(x1Max, x2Max),
      Math.max(y1Max, y2Max),
    ];

    const [xDiff, yDiff] = [xMax - xMin, yMax - yMin];
    const [xPad, yPad] = [xDiff, yDiff].map((x) => Math.max(x / 10, 1));

    const vXMin = Math.round(xMin - xPad);
    const vYMin = Math.round(yMin - yPad);
    const vWidth = Math.round(xDiff + 2 * xPad);
    const vHeight = Math.round(yDiff + 2 * yPad);

    return joinOnNewLines([
      svg(),
      `<rect width="${width}" height="${height}" rx="${width / 5}" ry="${
        height / 5
      }" fill="#282a36"></rect>`,
      svg([`viewBox="${vXMin} ${vYMin} ${vWidth} ${vHeight}"`]),
      '<g stroke="#f1fa8c">',
      joinOnNewLines(listOfCoordinateLists.map(polyline)),
      '</g>',
      `<use href="#curve" stroke="#ffb86c" transform="rotate(180) translate(${xTrans}, ${yTrans})" />`,
      '</svg>',
      '</svg>',
    ]);
  };

/** Tuple (,) :: a -> b -> (a, b) */
const Tuple =
  <T, U>(a: T) =>
  (b: U): ITuple<T, U> => ({
    type: 'Tuple',
    0: a,
    1: b,
    length: 2,
  });

/** add (+) :: Num a => a -> a -> a */
const add =
  (a: number) =>
  // Curried addition.
  (b: number) =>
    a + b;

/** ap (<*>) :: [(a -> b)] -> [a] -> [b] */
const ap =
  <T, U>(functions: Array<(a: T) => U>) =>
  // The sequential application of each of a list
  // of functions to each of a list of values.
  (values: T[]): U[] =>
    functions.flatMap((f) => values.map(f));

/** append (++) :: [a] -> [a] -> [a] */
const append =
  <T>(xs: T[]) =>
  // A list or string composed by
  // the concatenation of two others.
  (ys: T[]): T[] =>
    xs.concat(ys);

/** compose (<<<) :: (b -> c) -> (a -> b) -> a -> c */
const compose = (...fs: Array<(x: any) => any>) =>
  fs.reduce(
    (previousFunction, currentFunction) => (x) =>
      previousFunction(currentFunction(x)),
    (x: any) => x
  );

/** concat :: [[a]] -> [a] */
const concat = <T>(xs: T[][]): T[] => [].concat(...xs);

/** dotProduct :: Num a => [[a]] -> [[a]] -> [[a]] */
const dotProduct = (xs: number[][]): ((a: number[][]) => number[][]) =>
  compose(sum, zipWith(mul)(xs));

/** flip :: (a -> b -> c) -> b -> a -> c */
const flip =
  <T, U, V>(f: (a: T) => (b: U) => V) =>
  (x: U) =>
  (y: T): V =>
    f(y)(x);

// index (!!) :: [a] -> Int -> Maybe a
// index (!!) :: Generator (a) -> Int -> Maybe a
// index (!!) :: String -> Int -> Maybe Char
const index =
  <T, U extends T[] | Generator<T> | string>(xs: U) =>
  (i: number) => (drop(i)(xs), take(1)(xs));

// drop :: Int -> [a] -> [a]
// drop :: Int -> Generator [a] -> Generator [a]
// drop :: Int -> String -> String
const drop = (n: number) => (xs) =>
  Infinity > length(xs) ? xs.slice(n) : (take(n)(xs), xs);

/** init :: [a] -> [a] */
const init = <T>(xs: T[]): T[] =>
  // All elements of a list except the last.
  0 < xs.length ? xs.slice(0, -1) : undefined;

/** iterate :: (a -> a) -> a -> Gen [a] */
const iterate = <T>(f: (a: T) => T): ((a: T) => Generator<T, never, T>) =>
  function* (x: T) {
    let v = x;
    while (true) {
      yield v;
      v = f(v);
    }
  };

/**
 * The last item of a list.
 *
 * `last :: [a] -> a`
 */
const last = <T>(xs: T[]): T => (0 < xs.length ? xs.slice(-1)[0] : undefined);

/** length :: [a] -> Int */
const length = (xs: any): number =>
  // Returns Infinity over objects without finite
  // length. This enables zip and zipWith to choose
  // the shorter argument when one is non-finite,
  // like cycle, repeat etc
  Array.isArray(xs) || 'string' === typeof xs ? xs.length : Infinity;

/**
 * The list obtained by applying f to each element of xs. (The image of xs under f).
 * map :: (a -> b) -> [a] -> [b]
 */
const map =
  <T, U>(mappingFunction: (a: T) => U): ((a: T[]) => U[]) =>
  (xs) =>
    xs.map(mappingFunction);

/** matrixMultiply :: Num a => [[a]] -> [[a]] -> [[a]] */
const matrixMultiply =
  (a: number[][]) =>
  (b: number[][]): number[][] => {
    const cols = transpose(b);
    return a.map(compose(flip(map)(cols), dotProduct));
  };

/** minimum :: Ord a => [a] -> a */
const minimum = (xs: number[]): number =>
  0 < xs.length
    ? xs.slice(1).reduce((a, x) => (x < a ? x : a), xs[0])
    : undefined;

/** maximum :: Ord a => [a] -> a */
const maximum = (xs: number[]): number =>
  // The largest value in a non-empty list.
  0 < xs.length
    ? xs.slice(1).reduce((a, x) => (x > a ? x : a), xs[0])
    : undefined;

/** mul (*) :: Num a => a -> a -> a */
const mul = (a: number) => (b: number) => a * b;

/** reverse :: [a] -> [a] */
const reverse = <T>(xs: T[]): T[] => xs.slice(0).reverse();

/** showJSON :: a -> String */
const showJSON = <T>(x: T) =>
  // Indented JSON representation of the value x.
  JSON.stringify(x, null, 2);

/** subtract :: Num -> Num -> Num */
const subtract = (x: number) => (y: number) => y - x;

/** sum :: [Num] -> Num */
const sum = (xs: number[]): number =>
  // The numeric sum of all values in xs.
  xs.reduce((a, x) => a + x, 0);

/**
 * The first n elements of a list, string of characters, or stream.
 *
 * ```
 * take :: Int -> [a] -> [a]
 * take :: Int -> String -> String
 * ```
 */
const take = (n: number) => (xs: any) => {
  if ('GeneratorFunction' !== xs.constructor.constructor.name) {
    return xs.slice(0, n);
  }

  return [].concat(
    ...Array.from(
      {
        length: n,
      },
      () => {
        const x = xs.next();
        return x.done ? [] : [x.value];
      }
    )
  );
};

/** transpose :: [[a]] -> [[a]] */
const transpose = <T>(rows: T[][]): T[][] =>
  // The columns of the input transposed
  // into new rows.
  // Simpler version of transpose, assuming input
  // rows of even length.
  0 < rows.length ? rows[0].map((x, i) => rows.flatMap((x) => x[i])) : [];

/** joinOnNewLines :: [String] -> String */
const joinOnNewLines = (xs: string[]): string =>
  // A single string formed by the intercalation
  // of a list of strings with the newline character.
  xs.join('\n');

/** joinWithSpaces :: [String] -> String */
const joinWithSpaces = (xs: string[]): string =>
  // A space-separated string derived
  // from a list of words.
  xs.join(' ');

/** unzip :: [(a,b)] -> ([a],[b]) */
const unzip = <T, U>(xys: ITuple<T, U>[]): ITuple<T[], U[]> =>
  xys.reduce(
    (ab, xy) => Tuple<T[], U[]>(ab[0].concat(xy[0]))(ab[1].concat(xy[1])),
    Tuple<T[], U[]>([])([])
  );

/**
 * A list constructed by zipping with a custom function, rather than with the default tuple constructor.
 *
 * `zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]`
 */
const zipWith = (zippingFunction) => (xs) => (ys) => {
  const shortestLength = Math.min(length(xs), length(ys));
  const vs = take(shortestLength)(ys);

  return take(shortestLength)(xs).map((x, index: number) =>
    zippingFunction(x)(vs[index])
  );
};

const iterations = 14;

writeFileSync(
  'dist/apps/logo/assets/favicon.svg',
  svgFromPointLists(
    1000,
    1000,
    iterations
  )(
    index(
      iterate(dragonCurve)([
        [0, 0],
        [0, -1],
      ])
    )(iterations)
  )
);

type ITuple<T, U> = {
  type: 'Tuple';
  0: T;
  1: U;
  length: 2;
};
