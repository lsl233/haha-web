import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Views/Home'
import Qrcode from './Views/Qrcode'
import JSONView from './Views/JSON'
import System from './Views/System'
import LifeTime from './Views/LifeTime'

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
            <Route exact path="/system" component={System} />
            <Route exact path="/lifeTime" component={LifeTime} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
