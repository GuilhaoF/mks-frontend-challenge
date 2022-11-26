
import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global'
import { Provider } from 'react-redux';
import { setupStore } from '../redux/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={setupStore()}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </>

  )
}
