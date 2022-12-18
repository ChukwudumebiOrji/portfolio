import { AppAction } from "./actions"
import { IInitialState } from "./store"

export const appReducer = (state: IInitialState, action: AppAction) => {
  let showCurtain, showSidebar, isDark, showMenuBtn, curtainState, loadingText

  switch (action.type) {
    case "CLOSE_CURTAIN":
      showCurtain = false
      return { ...state, showCurtain }

    case "OPEN_SIDEBAR":
      showSidebar = true
      return { ...state, showSidebar }

    case "CLOSE_SIDEBAR":
      showSidebar = false
      return { ...state, showSidebar }

    case "TOGGLE_THEME":
      isDark = !state.isDark
      return { ...state, isDark }

    case "RESIZE_WINDOW":
      if (window.innerWidth < 768) {
        showMenuBtn = true
      } else {
        showMenuBtn = false
      }
      return { ...state, showMenuBtn }

    case "CHANGE_CURTAIN_STATE":
      curtainState = action.payload
      return { ...state, curtainState }

    case "CHANGE_LOADING_TEXT":
      loadingText = action.payload
      return { ...state, loadingText }

    default:
      return { ...state }
  }
}
