import { FC, PropsWithChildren, useReducer } from "react";
import { UIContext, UIReducer } from "./";
export interface UIState {
  sidemenuOpen: boolean;
  isAdding: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAdding: false,
  isDragging: false,
};

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);
  const openSideMenu = () => {
    dispatch({ type: "UI-Open Sidebar" });
  };
  const closeSideMenu = () => {
    dispatch({ type: "UI-Close Sidebar" });
  };
  const setIsAdding = (boolean: boolean) => {
    dispatch({ type: "UI-setIsAdding", payload: boolean });
  };
  const startDragging = () => {
    dispatch({ type: "UI-Start Dragging" });
  };
  const endDragging = () => {
    dispatch({ type: "UI-End Dragging" });
  };
  return (
    <UIContext.Provider
      value={{
        ...state,
        //Metodos
        openSideMenu,
        closeSideMenu,

        setIsAdding,

        startDragging,
        endDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
