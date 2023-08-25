import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import styles from './error-page.module.scss';

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div className={styles['container']}>
        <h1>Oops! {error.status}</h1>
        <p>{error.statusText}</p>
        {error.data?.message && (
          <p>
            <i>{error.data.message}</i>
          </p>
        )}
      </div>
    );
  }

  if (error instanceof Error) {
    return (
      <div className={styles['container']}>
        <h1>Oops! Unexpected Error</h1>
        <p>Something went wrong.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  }

  return;
}

export default ErrorPage;
