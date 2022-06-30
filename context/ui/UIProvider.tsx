import { FC, PropsWithChildren, useReducer } from "react";
import { UIContext, UIReducer } from "./";
export interface UIState {
  sidemenuOpen: boolean;
  isAdding: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAdding: false,
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
    boolean
      ? dispatch({ type: "UI-setIsAdding true" })
      : dispatch({ type: "UI-setIsAdding false" });
  };
  return (
    <UIContext.Provider
      value={{
        ...state,
        //Metodos
        openSideMenu,
        closeSideMenu,
        setIsAdding,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
