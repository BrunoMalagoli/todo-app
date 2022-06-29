import { Box, Button, TextField } from "@mui/material";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
export const NewEntry = () => {
  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      <Button startIcon={<AddBoxRoundedIcon />} fullWidth variant="outlined">
        Agregar tarea
      </Button>

      <TextField
        fullWidth
        sx={{ marginTop: 2, marginBottom: 1 }}
        autoFocus
        placeholder="Nueva entrada"
        multiline
        label="Nueva entrada"
        helperText="Ingrese un valor"
      />
      <Box display={"flex"} justifyContent="space-between">
        <Button variant="text" color="error">
          Cancelar
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          endIcon={<SaveRoundedIcon />}
        >
          Guardar
        </Button>
      </Box>
    </Box>
  );
};
