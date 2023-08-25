import anime from 'animejs';
import debounce from 'lodash/debounce';
import { useEffect, useState } from 'react';
import styles from './hex-background.module.scss';

const hexHeight = 100 + 2 * 2;
const hexWidth = 86.6 + 2 * 2;

function calculateHexCount(height: number, width: number) {
  const rows = Math.ceil((2 * height) / hexHeight);
  const columns = Math.ceil((2 * width) / hexWidth);
  return { rows, columns, total: rows * columns };
}

/* eslint-disable-next-line */
export interface HexBackgroundProps {}

export function HexBackground(props: HexBackgroundProps) {
  const [hexCount, setHexCount] = useState(
    calculateHexCount(window.innerHeight, window.innerWidth)
  );
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const debounced = debounce(
      function updateHexCount() {
        setHexCount(calculateHexCount(window.innerHeight, window.innerWidth));
      },
      1000,
      { leading: true, trailing: true }
    );

    window.addEventListener('resize', debounced);

    return () => window.removeEventListener('resize', debounced);
  });

  const handleClick = (index: number) => {
    anime({
      targets: `.${styles['hex']}`,
      opacity: toggle ? 1 : 0,
      delay: anime.stagger(50, {
        grid: [hexCount.rows, hexCount.columns],
        from: index,
      }),
    });
    setToggle(!toggle);
  };

  return (
    <div className={styles['main']}>
      <div className={styles['container']}>
        {Array.from({ length: hexCount.total }, (_, i) => (
          <div
            key={i}
            className={styles['hex']}
            onClick={() => handleClick(i)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default HexBackground;
