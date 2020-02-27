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
        },
        {
            name: 'JSON 格式化',
            des: '将输入的 JSON字符串 美化展示',
            image: '/images/json.png',
            url: '/json'
        },
        {
            name: '浏览器信息',
            des: '浏览器信息&系统信息展示',
            image: '/images/system.png',
            url: '/system'
        },
        {
            name: '人生时间',
            des: '仿Github风格展示今年已经过去的时间',
            image: '/images/system.png',
            url: '/lifeTime'
        }
    ]

    return (
        <div className="container home">
            <div className="columns">
                {
                    apps.map(item => (
                        <div className="column is-4" key={item.url}>
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