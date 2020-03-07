import makeStyles from "@material-ui/core/styles/makeStyles";

const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  title: {
    display: "inline-block"
  },
  selectedItem: { backgroundColor: "#3B3A53" },
  drawerTheme: {
    backgroundColor: "#43425D",
    color: "white",
    zIndex: 9999
  },
  paperTheme: {
    width: "40px"
  },
  navbarTitle: { marginRight: "auto", paddingLeft: "10px" },
  toolbarTheme: {
    backgroundColor: "white",
    color: "black",
    boxShadow: "none"
  },

  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  appBar: {
    boxShadow: " 0 4px 3px 0 rgba(0, 0, 0, 0.05)",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,

      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: "-5px"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {}
  }
}));
