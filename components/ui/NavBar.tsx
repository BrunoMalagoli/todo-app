import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useContext } from "react";
import { UIContext } from "../../context/ui/UIContext";
export const NavBar = () => {
  const { openSideMenu } = useContext(UIContext);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSideMenu}>
          <MenuRoundedIcon />
        </IconButton>
        <Typography variant="h6">toDoApp</Typography>
      </Toolbar>
    </AppBar>
  );
};
