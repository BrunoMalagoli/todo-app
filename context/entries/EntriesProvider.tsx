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
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "Adipisicing Lorem sunt est ex cillum laboris fugiat",
      status: "in-progress",
      createdAt: Date.now() - 10000,
    },
    {
      _id: uuidv4(),
      description: "Aliqua tempor officia officia non laborum",
      status: "finished",
      createdAt: Date.now() - 1000,
    },
  ],
};

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
