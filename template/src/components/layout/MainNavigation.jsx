import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { useHistory } from "react-router";

const MainNavigation = () => {
  const history = useHistory();

  const navigateTo = (route) => history.push(route);

  return (
    <List>
      <ListItem button onClick={() => navigateTo("/dashboard")}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary={"Dashboard"} />
      </ListItem>
      <ListItem button onClick={() => navigateTo("/users")}>
        <ListItemIcon>
          <ListAltIcon />
        </ListItemIcon>
        <ListItemText primary={"Users"} />
      </ListItem>
    </List>
  );
};

export default MainNavigation;
