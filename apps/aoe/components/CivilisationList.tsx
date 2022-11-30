import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectAllCivilisations } from '../store/civilisations.slice';
import BanButton from './BanButton';

export default function CivilisationList() {
  const civilisations = useSelector(selectAllCivilisations);
  return (
    <ul>
      {civilisations.map(({ id, name }) => (
        <li key={id}>
          <Link href={`/civ/${encodeURIComponent(id)}`}>{name}</Link> -{' '}
          <BanButton id={id} />
        </li>
      ))}
    </ul>
  );
}
