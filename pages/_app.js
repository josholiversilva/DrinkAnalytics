import Header from '../components/Header'
import Layout from '../components/Layout'
import { Provider } from 'react-redux'
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
import store from '../app/store'
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import '../styles/globals.css'
import AppWrapper from '../components/AppWrapper';
import { AuthProvider } from '../firebase/auth';

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
      <div className="bg-[#19222e] h-full">
        <Provider store={store}>
          <AuthProvider>
            <AppWrapper Component={Component} pageProps={pageProps} />
          </AuthProvider>
        </Provider>
      </div>
  )
}

export default MyApp
