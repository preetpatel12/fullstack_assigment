import '../styles/globals.css'
import Header from './../components/header/Header'

export default function App({ Component, pageProps }) {
  return <Header><Component {...pageProps} /></Header>
}
