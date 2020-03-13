import React, {useEffect, useState} from 'react'
import {Link, HashRouter as Router} from 'react-router-dom'
import './style.scss'

const Header: React.FC = () => {
    const [isShow, setIsShow] = useState<boolean>(false)

    useEffect(() => {
        document.body.onclick = function () {
            setIsShow(false)
        }
    })

    const handleSwitchShowNavBar = (e: React.MouseEvent) => {
        e.stopPropagation()
        setIsShow(!isShow)
    }

    return (
        <Router>
            <nav className="navbar has-shadow header">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                        <img src="/images/logo.png" alt="logo"/>
                    </Link>

                    <div onClick={handleSwitchShowNavBar} className="navbar-burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className={`navbar-menu ${isShow ? 'show' : 'hide'}`}>
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