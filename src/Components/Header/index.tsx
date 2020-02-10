import React from 'react'
import { Link, HashRouter as Router } from 'react-router-dom'

const Header: React.FC = () => {
    return (
        <Router>
            <nav className="navbar has-shadow">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item" >
                        <img src="/images/logo.png" alt="logo" />
                    </Link>

                    <div className="navbar-burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className="navbar-menu">
                    <div className="navbar-start">
                        <Link to="/" className="navbar-item">首页</Link>
                        <Link to="/qrcode" className="navbar-item">二维码生成</Link>
                        <Link to="/json" className="navbar-item">JSON格式化</Link>
                    </div>
                </div>
            </nav>
        </Router>
    )
}

export default Header