import { combineReducers } from 'redux';
import ArticleReducer from './reducer-articles';
import ActiveArticle from './reducer-activeArticle';
import SearchText from './reducer-searchText';
import HeaderDropDown from './reducer-header';

const allReducers = combineReducers({
  articles: ArticleReducer,
  activeArticle: ActiveArticle,
  searchText: SearchText,
  headerDropDown: HeaderDropDown
});

export default allReducers;
