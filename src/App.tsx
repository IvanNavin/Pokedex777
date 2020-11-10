import React from 'react';
import {useRoutes} from "hookrouter";

import RedirectPage from './pages/404';
import routes from "./routes";

const App = () => {
    const match = useRoutes(routes);

    return match || <RedirectPage />;
};

export default App;
