import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Views/Home'
import Qrcode from './Views/Qrcode'
import JSONView from './Views/JSON'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="section">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/qrcode" component={Qrcode} />
            <Route exact path="/json" component={JSONView} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
