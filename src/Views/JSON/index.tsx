import React, { useState, useEffect } from 'react'
import { debounce } from '../../utils'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import './style.scss'

function removeQuotation(str: string) {
    return str.replace(/(^")|("$)/g, '')
}

const debounceStr2Code = debounce((
    val: string,
    success: (html: string) => void,
    error: (err: ErrorEvent) => void
) => {
    try {
        const html: string = hljs.highlightAuto(JSON.stringify(JSON.parse(removeQuotation(val)), null, 4)).value
        success(html)
    } catch (e) {
        error(e)
    }
})

const JSONView: React.FC = () => {
    const [val, setVal] = useState<string>('')
    const [errMsg, setErrMsg] = useState<string>('')
    const [html, setHTML] = useState<string>('// TODO')

    useEffect(() => {
        console.log('useEffect')
    }, [])

    const handleInputChange = function (e: React.ChangeEvent<HTMLTextAreaElement>) {
        const val = e.target.value
        setVal(val)
        debounceStr2Code(
            val,
            (html: string) => {
                setHTML(html)
                setErrMsg('')
            },
            (e: ErrorEvent) => {
                setErrMsg(e.message)
            }
        )
    }

    return (
        <div className="container">
            <h1 className="title">JSON 格式化</h1>
            <p className="subtitle is-5">将输入的 <strong>JSON字符串</strong> 美化展示</p>

            <div className="columns">
                <div className="control column is-half">
                    <textarea
                        autoFocus
                        className="textarea"
                        value={val}
                        onChange={handleInputChange}
                        rows={10}
                        placeholder="请输入JSON字符串"
                    />
                    <p>{errMsg}</p>
                </div>
                <div className="column is-half">
                    <pre style={{ opacity: html ? 1 : 0 }} className="prview-code"><code className="language-json" dangerouslySetInnerHTML={{ __html: html }}></code></pre>
                </div>
            </div>
        </div >
    )
}

export default JSONView