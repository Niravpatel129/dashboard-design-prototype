import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import clsx from "clsx";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import Icon from "@material-ui/core/Icon";

import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";

import "./Navigation.scss";
import useStyles from "./Navigation-styles";
import Menu from "./SubComponents/Menu";

// Holding the possible routes of the sidebar
const drawerRoutes = [
  {
    title: "Home",
    icon: "home"
  },
  {
    title: "Dashboard",
    icon: "signal_cellular_alt"
  },
  {
    title: "About me",
    icon: "perm_identity"
  },
  {
    title: "Products",
    icon: "local_movies"
  },
  {
    title: "Invoces",
    icon: "bookmarks"
  },
  {
    title: "Mail Marketing",
    icon: "mail"
  },
  {
    title: "Chat Room",
    icon: "chat"
  }
];

export default function Navigation({ selected }) {
  const isDesktop = useMediaQuery("(min-width:600px)");
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [drawerView, setDrawerView] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerView(!drawerView);

    if (!drawerView) {
      dispatch({ type: "DRAWER_OPEN" });
    } else {
      dispatch({ type: "DRAWER_CLOSE" });
    }
  };

  return (
    <nav className={clsx(classes.root, "Navigation")}>
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
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h3
            style={{
              marginLeft: "0.9rem",
              paddingLeft: "3.8rem"
            }}
          >
            {!drawerView && <span className="title">AWESOME DASH</span>}
          </h3>

          {/* Mobile  */}
          {!isDesktop ? (
            <Menu>
              <div
                style={{
                  color: "#BCBCCB",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
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
                <IconButton color="inherit">
                  <AccountCircle />
                </IconButton>
              </div>
            </Menu>
          ) : (
            <div
              style={{
                color: "#BCBCCB"
              }}
            >
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
              <span style={{ color: "black", cursor: "pointer" }}>
                John Doe
              </span>
              <IconButton color="inherit">
                <AccountCircle />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, "drawer", {
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
        <div
          className={clsx(classes.toolbar, classes.paperTheme)}
          style={{ justifyContent: "center" }}
        >
          {drawerView && (
            <h3
              className="drawerTitle"
              style={{ color: "white", marginLeft: "0.9rem", flex: 1 }}
            >
              AWESOME DASH
            </h3>
          )}
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
        </div>
        <List>
          {drawerRoutes.map(item => (
            <ListItem
              button
              key={item.title}
              style={{
                backgroundColor:
                  selected.toLowerCase() === item.title.toLowerCase()
                    ? "#3C3B54"
                    : "",
                borderLeft:
                  selected.toLowerCase() === item.title.toLowerCase()
                    ? "0.1rem solid #A3A0FB"
                    : ""
              }}
              onClick={() => {
                if (item.title.toLowerCase() === "home") {
                  history.push("/");
                }
              }}
            >
              <Icon
                style={{
                  color:
                    selected.toLowerCase() === item.title.toLowerCase()
                      ? "#9290E2"
                      : "#A5A4BF",
                  width: "2.6rem"
                }}
              >
                {item.icon}
              </Icon>
              <ListItemText
                variant="h7"
                primary={item.title}
                style={{
                  color: "white"
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </nav>
  );
}
