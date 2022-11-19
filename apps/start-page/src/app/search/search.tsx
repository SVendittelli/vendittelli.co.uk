import { Input } from 'dracula-ui';
import { useForm } from 'react-hook-form';
import styles from './search.module.scss';

type FormInputs = {
  query: string;
};

export function Search() {
  const { register, handleSubmit } = useForm<FormInputs>();
  const onSubmit = ({ query }: FormInputs) =>
    window.open(
      `https://duckduckgo.com/?q=${encodeURIComponent(query)}`,
      '_self'
    );

  return (
    <form
      className={styles['container']}
      onSubmit={handleSubmit(onSubmit)}
      role="search"
    >
      <Input
        {...register('query')}
        placeholder="Search..."
        color="white"
        type="search"
        aria-label="Search DuckDuckGo"
      />
    </form>
  );
}

export default Search;
