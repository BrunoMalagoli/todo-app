import { UIState } from "./";

type UIActionType =
  | { type: "UI-Open Sidebar" }
  | { type: "UI-Close Sidebar" }
  | { type: "UI-setIsAdding true" }
  | { type: "UI-setIsAdding false" };
export const UIReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "UI-Open Sidebar":
      return {
        ...state,
        sidemenuOpen: true,
      };
    case "UI-Close Sidebar":
      return {
        ...state,
        sidemenuOpen: false,
      };
    case "UI-setIsAdding true":
      return {
        ...state,
        isAdding: true,
      };
    case "UI-setIsAdding false":
      return {
        ...state,
        isAdding: false,
      };
    default:
      return state;
  }
};
