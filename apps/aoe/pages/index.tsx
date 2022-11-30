import Link from 'next/link';
import { civilisationList, civilisations } from '../data/civilisations';

export function Index() {
  return (
    <>
      <h1>AoE</h1>
      <ul>
        {civilisationList.map((civilisation) => (
          <li key={civilisation}>
            <Link href={`/civ/${encodeURIComponent(civilisation)}`}>
              {civilisations[civilisation].name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Index;
