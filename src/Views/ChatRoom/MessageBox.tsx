import React, { useEffect, useRef } from 'react'
import useMessages, { IMessage } from './useMessages'
import socket from './initSocket'

function toBottom(element: HTMLDivElement) {
    if (element.scrollHeight > element.clientHeight) {
        element.scrollTop = element.scrollHeight
    }
}

function renderItem(message: IMessage) {
    return [
        (
            <div className={`${socket.id === message.userId ? 'self' : ''}`} key={message.id}>
                <span className="content">{message.content}</span>
            </div>
        ),
        (
            <div className="system" key={message.id}>
                <span className="content">{message.content}</span>
            </div>
        )
    ][message.sender]
}

const MessageBox: React.FC = () => {
    const [messages] = useMessages()
    const messagesElement = useRef<HTMLDivElement>(null)

    useEffect(() => {
        messagesElement.current && toBottom(messagesElement.current)
    }, [messages])

    return (
        <div ref={messagesElement} className="messages">
            {
                messages.map((message) => renderItem(message))
            }
        </div>
    )
}

export default MessageBox
