import Header from '../components/Header'
import Layout from '../components/Layout'

import { Provider } from 'react-redux'
import store from '../app/store'

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
  )
}

export default MyApp
