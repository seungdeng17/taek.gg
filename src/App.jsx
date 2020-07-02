import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';

import Header from '@components/header/Header';
import MainSearch from '@components/mainSearch/MainSearch';
import SummonerInfo from '@components/summonerInfo/SummonerInfo';

function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <Router>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path='/' component={MainSearch} />
          <Route exact path='/summoner/:summonerName' component={SummonerInfo} />
        </Switch>
      </Router>

    </ThemeProvider>
  );
}

export default App;
