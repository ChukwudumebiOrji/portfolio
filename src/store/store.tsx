import React, { createContext, useReducer } from "react"
import { AppAction } from "./actions"
import { appReducer } from "./reducer"

const initialState = {
  isDark: window.matchMedia("(prefers-color-scheme: dark)").matches,
  showSidebar: false,
  showCurtain: true,
  showMenuBtn: window.innerWidth > 768 ? false : true,
  curtainState: "hello",
  loadingText: "fixing stuff",
}

export type IInitialState = typeof initialState

const AppContext = createContext<{
  state: IInitialState
  dispatch: React.Dispatch<AppAction>
}>({
  state: initialState,
  dispatch: () => null,
})

const AppProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer<React.Reducer<IInitialState, AppAction>>(
    appReducer,
    initialState
  )

  console.log()

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
