import React, { useContext } from 'react'
import { GlobalContext } from '../Global'
import './style.scss'

const Login: React.FC = () => {
    const { state, dispatch } = useContext(GlobalContext)

    return (
        <div className={`modal ${state.loginViable ? 'viable' : ''}`}>
            <div className="modal-background"></div>
            <div className="modal-content login">
                <div className="box form">
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input className="input" type="email" placeholder="Email" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" type="password" placeholder="Password" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button className="button is-success"> Login</button>
                        </p>
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={() => dispatch({ type: 'SWITCH_LOGIN_SHOW' })}></button>
            </div>
        </div>
    )
}

export default Login
