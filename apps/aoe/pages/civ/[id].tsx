import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import BanButton from '../../components/BanButton';
import { civilisations } from '../../data/civilisations';
import { selectCivilisationById } from '../../store/civilisations.slice';
import { AppState, wrapper } from '../../store/store';

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: civilisations.map(({ id }) => ({
      params: { id },
    })),
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (_store) => () => ({
    props: {},
  })
);

const Civilisation = () => {
  const router = useRouter();
  const { id } = router.query;

  const { name, ...rest } = useSelector((state: AppState) =>
    selectCivilisationById(state, id as string)
  );

  return (
    <>
      <Link href="/">Home</Link>
      <h1>Civilisation: {name}</h1>
      <p>{JSON.stringify(rest)}</p>
      <BanButton id={id as string} />
    </>
  );
};

export default Civilisation;
