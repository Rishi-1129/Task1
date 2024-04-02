import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

import FormatListNumberedOutlinedIcon from "@mui/icons-material/FormatListNumberedOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import HandshakeIcon from "@mui/icons-material/Handshake";

import PeopleIcon from "@mui/icons-material/People";
import { BottomNavigationAction, Box, Tooltip } from "@mui/material";

import GroupsIcon from "@mui/icons-material/Groups";

function EditProspectListItem() {

  return (
    <>

      <ListItemButton

      >
        <ListItemIcon>
          <FormatListNumberedOutlinedIcon style={{color:'white'}} />
        </ListItemIcon>

      </ListItemButton>
      <ListItemButton

      >
        <ListItemIcon>
          <TextSnippetOutlinedIcon style={{color:'white'}}/>
        </ListItemIcon>

      </ListItemButton>
      <ListItemButton

      >
        <ListItemIcon>
          <HandshakeIcon style={{color:'white'}}/>
        </ListItemIcon>

      </ListItemButton>
      <ListItemButton

      >
        <ListItemIcon>
          <GroupsIcon style={{color:'white'}}/>
        </ListItemIcon>

      </ListItemButton>

      <ListItemButton

      >
        <ListItemIcon>
          <PeopleIcon style={{color:'white'}}/>
        </ListItemIcon>

      </ListItemButton>

    </>
  );
}

// Add the custom list item component to the mainListItems array
export const mainListItems = (
  <Box zIndex={10} whiteSpace={"nowrap"}>
    <EditProspectListItem />
  </Box>
);
