//The following reducer passes the ID from ArticleReducer
//It filters the item based on the ID that is passed.
export default function (state = {}, action) {
  // console.log(action.id);
  switch(action.type) {
    case "ACTIVE_ARTICLE":
    return action.articles.find(item => item.id === parseInt(action.id));
    break;
    default: return state;
  }
}
