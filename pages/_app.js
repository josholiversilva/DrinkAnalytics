import Header from '../components/Header'
import Layout from '../components/Layout'
import { Provider } from 'react-redux'
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
import store from '../app/store'
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <div className="h-screen w-screen bg-[#19222e]">
        <Provider store={store}>
          <Header />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </div>
  )
}

export default MyApp
