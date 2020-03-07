import React, { useState } from "react";

import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";

import "./NavBar.scss";
import { useStyles } from "./NavBar-styles";

function NavBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedIndex] = useState("Dashboard");

  const handleDrawerToggle = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <div className={clsx(classes.root, "NavBar")}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <div className="toolbar">
          <Toolbar className={classes.toolbarTheme} variant="dense">
            <div className="inside">
              <IconButton
                aria-label="show 11 new notifications"
                color="secondary"
              >
                <Badge badgeContent={2}>
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <span style={{ opacity: 0.87 }} className="name">
                John Doe
              </span>

              <IconButton
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="secondary"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </div>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, classes.drawerTheme, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx(classes.drawerTheme, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          {open && <h4 className={classes.navbarTitle}>AWESOME DASH</h4>}
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon
              className={clsx(classes.drawerTheme, classes.menuButton)}
            />
          </IconButton>
        </div>
        <Divider />
        <List>
          {[
            "Home",
            "Dashboard",
            "About",
            "Products",
            "Invoices",
            "Mail Marketing",
            "Chat Room",
            "Calender"
          ].map((text, index) => (
            <ListItem
              button
              key={text}
              className={(text === selectedIndex && classes.selectedItem) || ""}
            >
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <InboxIcon color="secondary" />
                ) : (
                  <MailIcon color="secondary" />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default NavBar;
