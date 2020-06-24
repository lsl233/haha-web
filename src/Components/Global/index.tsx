import React, { createContext, useReducer } from "react";

interface IProps {
    children: React.ReactChild
}

interface IGlobal {
    loginViable: boolean
}

interface IAction {
    type: string
    data?: any
}

const initialState: IGlobal = {
    loginViable: false
}

const SWITCH_LOGIN_SHOW = 'SWITCH_LOGIN_SHOW'

type TReducer = React.Reducer<IGlobal, IAction>
const reducer: TReducer = (state, action) => {
    switch (action.type) {
        case SWITCH_LOGIN_SHOW:
            return { ...state, loginViable: !state.loginViable }
        default:
            return state
    }
}

export const GlobalContext = createContext<{
    state: IGlobal
    dispatch: React.Dispatch<IAction>
}>({ state: initialState, dispatch: () => {} })

 const Global = (props: IProps) => {
    const [state, dispatch] = useReducer<TReducer>(reducer, initialState)
    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default Global