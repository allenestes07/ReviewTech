//SearchText
export default function (state = "", action) {
  // console.log(action.id);
  switch(action.type) {
    case "SET_SEARCH":
      return action.searchText;
    default: return state;
  }
}
