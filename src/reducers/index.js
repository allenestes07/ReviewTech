import { combineReducers } from 'redux';
import ArticleReducer from './reducer-articles';
import ActiveArticle from './reducer-activeArticle';
import SearchText from './reducer-searchText';

const allReducers = combineReducers({
  articles: ArticleReducer,
  activeArticle: ActiveArticle,
  searchText: SearchText
});

export default allReducers;
