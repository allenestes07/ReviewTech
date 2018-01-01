//The following reducer passes the ID from ArticleReducer
//It filters the item based on the ID that is passed.
const defaultState =   {
    id: null,
    description: null,
    published: null,
    image: null,
    content: []
  };

export default function (state = defaultState, action) {
  // console.log(action.id);
  switch(action.type) {
    case "ACTIVE_ARTICLE":
      return action.articles.find(item => item.id === parseInt(action.id));
    break;
    // case "SET_SEARCH":
    //   return action.searchText;
    // break;
    default: return state;
  }
}
