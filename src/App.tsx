import React from 'react';
import { useRoutes } from 'hookrouter';

import RedirectPage from './pages/404';
import routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const match = useRoutes(routes);

  return match ? (
    <>
      <Header />
      {match}
      <Footer />
    </>
  ) : (
    <RedirectPage />
  );
};

export default App;
