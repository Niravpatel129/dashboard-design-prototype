import React from "react";
import clsx from "clsx";

import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";

import "./NavBar.scss";
import useStyles from "./NavBar-styles";

// Holding the possible routes of the sidebar
const drawerRoutes = [
  "Home",
  "Dashboard",
  "About Me",
  "Products",
  "Invoices",
  "Mail Marketing",
  "Chat Room"
];

export default function NavBar({ selected }) {
  const classes = useStyles();

  const [drawerView, setDrawerView] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerView(!drawerView);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="default"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerView
        })}
        elevation={2}
      >
        <Toolbar
          variant="dense"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <div style={{ color: "#BCBCCB" }}>
            <IconButton color="inherit">
              <Badge color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <span style={{ color: "black" }}>John Doe</span>
            <IconButton edge="end" color="inherit">
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: drawerView,
          [classes.drawerClose]: !drawerView
        })}
        classes={{
          paper: clsx(classes.drawerTheme, {
            [classes.drawerOpen]: drawerView,
            [classes.drawerClose]: !drawerView
          })
        }}
      >
        <div className={clsx(classes.toolbar, classes.paperTheme)}>
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
        </div>
        <List>
          {drawerRoutes.map((text, index) => (
            <ListItem
              button
              key={text}
              style={{
                backgroundColor:
                  selected.toLowerCase() === text.toLowerCase() ? "#3C3B54" : ""
              }}
            >
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <InboxIcon color="secondary" />
                ) : (
                  <MailIcon color="secondary" />
                )}
              </ListItemIcon>
              <ListItemText primary={text} style={{ color: "white" }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
