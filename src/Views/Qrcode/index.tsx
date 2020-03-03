import React, { useState, useEffect } from 'react'
import QRCode from 'qrcode'
import { debounce } from '../../utils'
import './style.scss'

const makeQrcodeBase64 = function (
    val: string,
    options: QRCode.QRCodeToDataURLOptions = {},
    success: (qrcode: string) => void,
    error?: (error: Error) => void
) {
    return QRCode.toDataURL(
        val,
        Object.assign({
            margin: 0
        }, options),
        (e, base64) => {
            if (error) {
                error(e)
            } else {
                success(base64)
            }
        }
    )
}

const debounceMakeQrcodeBase64 = debounce(makeQrcodeBase64)

const Qrcode: React.FC = () => {
    const [value, setValue] = useState<string>('')
    const [imgUrl, setImgUrl] = useState<string>('')

    useEffect(() => {
        const href = window.location.href
        makeQrcodeBase64(href, {}, (base64) => {
            setImgUrl(base64)
        })
    }, [])

    function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const val = e.target.value
        setValue(val)
        debounceMakeQrcodeBase64(val, {}, (base64: string) => {
            setImgUrl(base64)
        })
    }

    return (
        <div className="container">
            <h1 className="title">二维码生成</h1>
            <p className="subtitle is-5">将输入的 <strong>文字</strong> 或 <strong>链接</strong> 转换为二维码</p>
            <div className="columns">
                <div className="control column is-half">
                    <textarea
                        autoFocus
                        className="textarea"
                        value={value}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="请输入内容, 例如：http(s)://"
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-globe"></i>
                    </span>
                </div>
                <figure className="qrcode column is-half">
                    <img src={imgUrl} alt="qrcode" />
                </figure>
            </div>
        </div>
    )
}

export default Qrcode