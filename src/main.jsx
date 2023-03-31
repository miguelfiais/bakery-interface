import React from 'react';
import ReactDOM from 'react-dom/client';
import MyRoutes from './routes/routes';
import GlobalStyles from './styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyRoutes />
    <GlobalStyles />
  </React.StrictMode>
);
