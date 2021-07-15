import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import ConverterPage from './pages/ConverterPage';
import HistoryPage from './pages/HistoryPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={ConverterPage} />
          <Route path='/history' component={HistoryPage} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
