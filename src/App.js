import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';

import MainSearch from '@components/mainSearch/MainSearch';

function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route exact path='/' component={MainSearch} />
        </Switch>
      </Router>

    </ThemeProvider>
  );
}

export default App;
