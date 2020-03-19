import React from 'react'
import Control from './Control'
import MessageBox from './MessageBox'
import './style.scss'

const ChatRoom: React.FC = () => {

    return (
        <div className="columns is-mobile">
            <div className="column is-half is-offset-one-quarter">
                <MessageBox />
                <Control />
            </div>
        </div>
    )
}

export default ChatRoom
