import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { wrapper } from '../store/store';
import './styles.scss';

function CustomApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Head>
        <title>AoE II: DE Random Civ Picker</title>
      </Head>
      <main className="app">
        <Component {...props.pageProps} />
      </main>
    </Provider>
  );
}

export default CustomApp;
