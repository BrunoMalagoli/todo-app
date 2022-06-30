import { FC, PropsWithChildren, useReducer } from "react";
import { Entry } from "../../interfaces";
import { v4 as uuidv4 } from "uuid";
import { EntriesContext, entriesReducer } from "./";
export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        "Pending: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        "In-progress:Adipisicing Lorem sunt est ex cillum laboris fugiat",
      status: "in-progress",
      createdAt: Date.now() - 10000,
    },
    {
      _id: uuidv4(),
      description: "Finished:Aliqua tempor officia officia non laborum",
      status: "finished",
      createdAt: Date.now() - 1000,
    },
  ],
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
  return (
    <EntriesContext.Provider
      value={{
        ...state,
        //Metodos
        addNewEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
