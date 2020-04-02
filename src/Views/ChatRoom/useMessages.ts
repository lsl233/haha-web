import React, { useEffect, useState } from 'react'
import socket from './initSocket'

enum Status {
    Sending,    // 发送中
    Sent,       // 发送完成
    Fail        // 发送失败
}

enum Type {
    Txt,        // 文本消息
    Image       // 图片消息
}

export enum Sender {
    Normal,     // 普通用户
    System      // 系统消息
}

export interface IMessage {
    content: string
    status: Status
    id: string
    userId: string
    type: Type
    sender: Sender
}

const state: IMessage[] = []
const actions: React.Dispatch<React.SetStateAction<IMessage[]>>[] = []
let emitter: SocketIOClient.Emitter

function createMessage(content: string, type: Type, sender: Sender, status: Status = Status.Sending): IMessage {
    return {
        content,
        status,
        id: '',
        userId: socket.id,
        type,
        sender
    }
}

function addMessage(content: string, type: Type = Type.Txt, sender: Sender = Sender.Normal) {
    const message = createMessage(content, type, sender)
    socket.emit('message', message)
}

export default function useMessages(): [IMessage[], (message: string) => void] {
    const [messages, setMessage] = useState<IMessage[]>(state)

    useEffect(() => {
        actions.push(setMessage)
        if (emitter) return
        emitter = socket.on('message', (message: IMessage) => {
            message.status = Status.Sent
            state.push(message)
            setMessage([...state])
        })
    }, [])

    return [messages, addMessage]
}
