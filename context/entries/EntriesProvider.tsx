import { FC, PropsWithChildren, useReducer, useEffect } from "react";
import { Entry } from "../../interfaces";
import { useSnackbar } from "notistack";
import { EntriesContext, entriesReducer } from "./";
import { entriesApi } from "../../apis";
export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);
  const { enqueueSnackbar } = useSnackbar();
  const addNewEntry = async (description: string) => {
    try {
      const { data } = await entriesApi.post<Entry>("/entries", {
        description,
      });
      dispatch({ type: "[Entry] - AddEntry", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const updateEntry = async (
    { _id, description, status }: Entry,
    showSnackbar = false
  ) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {
        description,
        status,
      });
      dispatch({ type: "[Entry] - UpdatedEntry", payload: data });
      //Mostramos Snackbar para indicar que se actualizó la entrada
      if (showSnackbar === true) {
        enqueueSnackbar("Entrada actualizada", {
          variant: "success",
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      }
    } catch (error) {
      console.log({ error });
    }
  };
  const deleteEntry = async ({ _id }: Entry) => {
    try {
      await entriesApi.delete<Entry>(`/entries/${_id}`);
      dispatch({ type: "[Entry] - DeleteEntry", payload: _id });
      enqueueSnackbar("Entrada eliminada", {
        variant: "error",
        autoHideDuration: 1500,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
    } catch (error) {}
  };
  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>("/entries");
    dispatch({ type: "[Entry] - RefreshData", payload: data });
  };
  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        //Metodos
        addNewEntry,
        updateEntry,
        deleteEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
