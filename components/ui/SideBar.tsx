import { useContext } from "react";
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import InboxRoundedIcon from "@mui/icons-material/InboxRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { UIContext } from "../../context/ui/UIContext";
const menuItems: string[] = ["Inbox", "Starred", "Send Email", "Drafts"];

export const SideBar = () => {
  const { sidemenuOpen, closeSideMenu } = useContext(UIContext);

  return (
    <Drawer anchor="left" open={sidemenuOpen} onClose={closeSideMenu}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menú</Typography>
        </Box>
        <List>
          {menuItems.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 ? <InboxRoundedIcon /> : <EmailRoundedIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {menuItems.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 ? <InboxRoundedIcon /> : <EmailRoundedIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
