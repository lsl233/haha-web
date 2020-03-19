import React, { Dispatch, SetStateAction, useEffect, useReducer, useState } from 'react'
import socket from './initSocket'

const state: string[] = []
const actions: React.Dispatch<React.SetStateAction<string[]>>[] = []

function addMessage(message: string) {
    state.push(message)
    socket.emit('message', message)
    for (const action of actions) {
        action([...state])
    }
}

let emitter: SocketIOClient.Emitter

export default function useMessages (): [string[], (message: string) => void] {
    const [ messages, setMessage ] = useState<string[]>(state)

    useEffect(() => {
        actions.push(setMessage)
        if (emitter) return
        emitter = socket.on('message', (message: string) => {
            state.push(message)
            setMessage([...state])
        })
    }, [])

    return [messages, addMessage]
}
