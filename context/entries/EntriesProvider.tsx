import { FC, PropsWithChildren, useReducer } from "react";
import { Entry } from "../../interfaces";
import { v4 as uuidv4 } from "uuid";
import { EntriesContext, entriesReducer } from "./";
export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);
  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: "pending",
    };
    dispatch({ type: "[Entry] - AddEntry", payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "[Entry] - UpdatedEntry", payload: entry });
  };
  return (
    <EntriesContext.Provider
      value={{
        ...state,
        //Metodos
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
