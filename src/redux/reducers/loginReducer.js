const loginsReducer = (state = [], action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default loginsReducer;
