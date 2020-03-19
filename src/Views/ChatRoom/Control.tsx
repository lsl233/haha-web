import React, { useState } from 'react'
import useMessages from './useMessages'
import './style.scss'

const Control: React.FC = () => {
    const [value, setValue] = useState<string>('')
    const [, addMessage] = useMessages()

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setValue(e.target.value)
    }

    function handleEnter(e: React.KeyboardEvent<HTMLTextAreaElement>) {
        if (e.keyCode === 13) {
            e.preventDefault()
            addMessage(value)
            setValue('')
        }
    }

    return (
        <div className="bottom">
            <div className="control">
                <textarea value={value} onChange={handleChange} onKeyDown={handleEnter} className="textarea is-small" placeholder="请输入内容" rows={5} />
            </div>
        </div>
    )
}

export default Control
