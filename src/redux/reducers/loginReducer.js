const loginsReducer = (state = [], action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return [...state, action.payload];
    case "GET_ALL_USERS":
      return state;
    default:
      return state;
  }
};

export default loginsReducer;
