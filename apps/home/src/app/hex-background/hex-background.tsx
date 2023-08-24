import debounce from 'lodash/debounce';
import { useEffect, useState } from 'react';
import styles from './hex-background.module.scss';

const hexHeight = 100 + 2 * 2;
const hexWidth = 86.6 + 2 * 2;

function calculateHexCount(height: number, width: number) {
  const rows = Math.ceil((2 * height) / hexHeight);
  const perRow = Math.ceil((2 * width) / hexWidth);
  return rows * perRow;
}

/* eslint-disable-next-line */
export interface HexBackgroundProps {}

export function HexBackground(props: HexBackgroundProps) {
  const [hexCount, setHexCount] = useState(
    calculateHexCount(window.innerHeight, window.innerWidth)
  );

  useEffect(() => {
    const debounced = debounce(
      function updateHexCount() {
        console.log('resize');
        setHexCount(calculateHexCount(window.innerHeight, window.innerWidth));
      },
      1000,
      { leading: true, trailing: true }
    );

    window.addEventListener('resize', debounced);

    return () => window.removeEventListener('resize', debounced);
  });

  return (
    <div className={styles['main']}>
      <div className={styles['container']}>
        {Array.from({ length: hexCount }, (_, i) => (
          <div key={i} className={styles['hex']}></div>
        ))}
      </div>
    </div>
  );
}

export default HexBackground;
