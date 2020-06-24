import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Global from './Components/Global'
import Header from './Components/Header'
import Login from './Components/Login'

import Home from './Views/Home'
import Qrcode from './Views/Qrcode'
import JSONView from './Views/JSON'
import System from './Views/System'
import LifeTime from './Views/LifeTime'
import Transfer from './Views/Transfer'
import ChatRoom from './Views/ChatRoom'

const App: React.FC = () => {

  return (
    <Global>
      <>
        <Header />
        <div className="section" style={{ paddingTop: '4.75rem' }}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/qrcode" component={Qrcode} />
              <Route exact path="/json" component={JSONView} />
              <Route exact path="/system" component={System} />
              <Route exact path="/lifeTime" component={LifeTime} />
              <Route exact path="/transfer" component={Transfer} />
              <Route exact path="/chatRoom" component={ChatRoom} />
              <Route path="*" component={Home} />
            </Switch>
          </Router>
        </div>
        <Login />
      </>
    </Global>
  )
}

export default App
