import React from 'react'
import useMessages from './useMessages'


const MessageBox: React.FC = () => {
    const [messages] = useMessages()
    console.log(messages)
    return (
        <div>
            {
                messages.map(message => <div key={message}>{message}</div>)
            }
        </div>
    )
}

export default MessageBox
