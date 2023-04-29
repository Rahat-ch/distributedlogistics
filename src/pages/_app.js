import '@/styles/globals.css'
import Sidebar from './home';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"></link> */}
    <Component {...pageProps} />
      
    </>
  );
}
