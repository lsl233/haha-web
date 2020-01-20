import React, { useState, useEffect } from 'react'
import QRCode from 'qrcode'
import './style.scss'


const Qrcode: React.FC = () => {
    const [value, setValue] = useState<string>('')
    const [imgUrl, setImgUrl] = useState<string>('')

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setValue(value)
        QRCode.toDataURL(value)
            .then(url => {
                setImgUrl(url)
            })
            .catch(err => {
                console.error(err)
            })

    }

    return (
        <div>
            <div className="control">
                <input
                    autoFocus
                    className="input"
                    type="text"
                    value={value} onChange={handleInputChange}
                    placeholder="请输入内容"
                />
                <span className="icon is-small is-left">
                    <i className="fas fa-globe"></i>
                </span>
            </div>
            <div className="qrcode">
                <img src={imgUrl} alt="qrcode" />
            </div>
        </div>
    )
}

export default Qrcode