const close = { paddingLeft: "5.9rem", paddingTop: "4.4rem" };
const open = { paddingLeft: "17rem", paddingTop: "4.4rem" };

const drawerReducer = (state = close, action) => {
  switch (action.type) {
    case "DRAWER_OPEN":
      return open;
    case "DRAWER_CLOSE":
      return close;
    default:
      return state;
  }
};

export default drawerReducer;
