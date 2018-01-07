import { combineReducers } from 'redux';
import ArticleReducer from './reducer-articles';
import ActiveArticle from './reducer-activeArticle';
import SearchText from './reducer-searchText';
import HeaderDropDown from './reducer-header';
import MenuItem from './reducer-menuItem';

const allReducers = combineReducers({
  articles: ArticleReducer,
  activeArticle: ActiveArticle,
  searchText: SearchText,
  headerDropDown: HeaderDropDown,
  menuItems: MenuItem
});

export default allReducers;
