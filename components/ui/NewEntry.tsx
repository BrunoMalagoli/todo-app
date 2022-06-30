import { ChangeEvent, useContext, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import { UIContext } from "../../context/ui/UIContext";
import { EntriesContext } from "../../context/entries";
export const NewEntry = () => {
  const { isAdding, setIsAdding } = useContext(UIContext);
  const { addNewEntry } = useContext(EntriesContext);
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);
  const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const onSave = () => {
    if (inputValue.length === 0) return;
    addNewEntry(inputValue);
    setIsAdding(false);
    setTouched(false);
    setInputValue("");
  };
  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAdding ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            autoFocus
            placeholder="Nueva entrada"
            multiline
            label="Nueva entrada"
            helperText={inputValue.length <= 0 && touched && "Ingrese un valor"}
            error={inputValue.length <= 0 && touched}
            value={inputValue}
            onChange={onTextFieldChanged}
            onBlur={() => setTouched(true)}
          />
          <Box display={"flex"} justifyContent="space-between">
            <Button
              variant="text"
              color="error"
              onClick={() => setIsAdding(false)}
            >
              Cancelar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveRoundedIcon />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddBoxRoundedIcon />}
          fullWidth
          variant="outlined"
          onClick={() => setIsAdding(true)}
        >
          Agregar tarea
        </Button>
      )}
    </Box>
  );
};
