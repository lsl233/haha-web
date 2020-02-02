import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Qrcode from './Views/Qrcode'
import Virus from './Views/Virus'

const App: React.FC = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/qrcode" component={Qrcode} />
          <Route exact path="/virus" component={Virus} />
        </Switch>
      </Router>
  );
}

export default App;
