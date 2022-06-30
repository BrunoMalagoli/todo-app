import { createContext } from "react";

interface ContextProps {
  sidemenuOpen: boolean;
  isAdding: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAdding: (boolean: boolean) => void;
  startDragging: () => void;
  endDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);
