import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const Home: React.FC = () => {
    return (
        <div className="container home">
            <div className="columns">
                <div className="column is-4">
                    <div className="card">
                        <Link to="/qrcode">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-96x96">
                                            <img src="/images/qrcode.png" alt="二维码生成器" />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <h3 className="title">二维码生成器</h3>
                                        <p className="ellipsis-2">可以将任何文本数据(链接)转换为二维码，方便手机扫描获取</p>

                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="column is-4">

                </div>
                <div className="column is-4">
                </div>
            </div>
        </div>
    )
}

export default Home