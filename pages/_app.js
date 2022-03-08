import Header from '../components/Header'
import Layout from '../components/Layout'

import { Provider } from 'react-redux'
import store from '../app/store'

import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
        <div className="bg-white">
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </div>
      </Provider>
  )
}

export default MyApp
