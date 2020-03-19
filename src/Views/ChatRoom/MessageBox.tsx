import React from 'react'
import useMessages from './useMessages'


const MessageBox: React.FC = () => {
    const [messages] = useMessages()
    console.log(messages)
    return (
        <div className="messages">
            {
                messages.map(message => <div key={message}><span className="content">{message}</span></div>)
            }
        </div>
    )
}

export default MessageBox
