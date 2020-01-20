import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import 'bulma'
import Qrcode from './Views/Qrcode'

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="notification">
        <Router>
          <Switch>
            <Route exact path="/qrcode" component={Qrcode} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
