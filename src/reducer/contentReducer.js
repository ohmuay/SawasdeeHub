const contentReducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return action.data;
    case "FILTER":
      return state.filter((item)=> item.albumId === action.albumId)
    case "SEARCH":
      return state.filter((item)=> item.id ===  action.id )
    default:
      return state;
  }
};

export default contentReducer;
