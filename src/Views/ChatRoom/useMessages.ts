import { Dispatch, SetStateAction, useEffect, useReducer, useState } from 'react'
import socket from './initSocket'

type State = {
    messages: string[]
}

type Action = {
    type: 'addMessage'
    payload: string
}

const initialState: State  = {
    messages: []
}

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'addMessage':
            return { messages: [...state.messages, action.payload] }
    }
}

export default function useMessages (): [string[], (message: string) => void] {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        socket.on('message', (message: string) => {
            dispatch({ type: 'addMessage', payload: message })
        })
    }, [])

    function addMessage(message: string) {
        debugger
        dispatch({ type: 'addMessage', payload: message })
        socket.emit('message', message)
    }

    return [state.messages, addMessage]
}
