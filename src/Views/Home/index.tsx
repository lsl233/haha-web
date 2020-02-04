import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const Home: React.FC = () => {
    const apps = [
        {
            name: '二维码生成器',
            des: '可以将文本(链接)转换为二维码，方便手机扫描获取',
            image: '/images/qrcode.png',
            url: '/qrcode'
        }
    ]

    return (
        <div className="container home">
            <div className="columns">
                {
                    apps.map(item => (
                        <div className="column is-4">
                            <div className="card">
                                <Link to={item.url}>
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-left">
                                                <figure className="image is-96x96">
                                                    <img src={item.image} alt="logo" />
                                                </figure>
                                            </div>
                                            <div className="media-content">
                                                <h3 className="title">{item.name}</h3>
                                                <p className="ellipsis-2">{item.des}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home