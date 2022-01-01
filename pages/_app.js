import Header from '../components/Header'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
