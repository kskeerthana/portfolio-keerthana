// pages/_app.js
import '../src/app/globals.css';
import '../src/app/fontawesome';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
