import React from 'react'
import useMessages from './useMessages'
import RichText from '../../Components/RichText'
import './style.scss'

const Control: React.FC = () => {
    const [, addMessage] = useMessages()

    function handleEnter(value: string) {
        addMessage(value)
    }

    return (
        <div className="control">
            <RichText onEnter={handleEnter}/>
        </div>
    )
}

export default Control
