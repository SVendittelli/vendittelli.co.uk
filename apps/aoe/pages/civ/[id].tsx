import { GetStaticPaths, GetStaticProps } from 'next';
import { civilisationList, civilisations } from '../../data/civilisations';
import { CivilisationDetails } from '../../types/civilisations';

type CivilisationProps = {
  details: CivilisationDetails;
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: civilisationList.map((civilisation) => ({
      params: { id: civilisation },
    })),
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  return {
    props: { details: civilisations[context.params.id as string] },
  };
};

const Civilisation = ({ details }: CivilisationProps) => {
  return (
    <>
      <h1>Civilisation: {details.name}</h1>
      <p>{JSON.stringify(details)}</p>
    </>
  );
};

export default Civilisation;
