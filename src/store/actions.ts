export const toggleTheme = (): {
  type: "TOGGLE_THEME"
} => ({
  type: "TOGGLE_THEME",
})

export const openSidebar = (): {
  type: "OPEN_SIDEBAR"
} => ({
  type: "OPEN_SIDEBAR",
})

export const closeSidebar = (): {
  type: "CLOSE_SIDEBAR"
} => ({
  type: "CLOSE_SIDEBAR",
})

export const closeCurtain = (): {
  type: "CLOSE_CURTAIN"
} => ({
  type: "CLOSE_CURTAIN",
})

export const resizeWindow = (): {
  type: "RESIZE_WINDOW"
} => ({
  type: "RESIZE_WINDOW",
})

export const changeCurtainState = (
  state: string
): {
  type: "CHANGE_CURTAIN_STATE"
  payload: typeof state
} => ({
  type: "CHANGE_CURTAIN_STATE",
  payload: state,
})

export const changeLoadingText = (
  state: string
): {
  type: "CHANGE_LOADING_TEXT"
  payload: typeof state
} => ({
  type: "CHANGE_LOADING_TEXT",
  payload: state,
})

export type AppAction =
  | ReturnType<typeof toggleTheme>
  | ReturnType<typeof openSidebar>
  | ReturnType<typeof closeCurtain>
  | ReturnType<typeof closeSidebar>
  | ReturnType<typeof resizeWindow>
  | ReturnType<typeof changeCurtainState>
  | ReturnType<typeof changeLoadingText>
