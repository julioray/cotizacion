import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from '../src/Components/GlobalStyles';
import theme from './theme';
import Routes from './router/routes';
import { useRoutes } from 'react-router-dom';

const App = () => {
  const routing = useRoutes(Routes);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;