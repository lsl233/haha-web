import React, { useState, useEffect } from 'react'
import { IBrowser } from '../../model/interface'
import './style.scss'

const System: React.FC = () => {
    const [browser, setBrowser] = useState<IBrowser>({
        userAgent: '',
        href: ''
    })

    useEffect(() => {
        const { navigator, location } = window
        setBrowser({
            userAgent: navigator.userAgent,
            href: location.href
        })
    }, [])

    return (
        <div className="container system">
            <article className="panel is-primary">
                <p className="panel-heading">浏览器信息</p>
                <div className="">
                    <div className="columns is-mobile item">
                        <div className="column is-2 has-text-grey-dark has-text-right has-text-weight-medium">
                            userAgent
                        </div>
                        <div className="column is-10">
                            {browser.userAgent}
                        </div>
                    </div>
                    <div className="columns is-mobile item">
                        <div className="column is-2 has-text-grey-dark has-text-right has-text-weight-medium">
                            href
                        </div>
                        <div className="column is-10">
                            {browser.href}
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default System