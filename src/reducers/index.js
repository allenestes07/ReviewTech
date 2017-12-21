import { combineReducers } from 'redux';
import ArticleReducer from './reducer-articles';
import ActiveArticle from './reducer-activeArticle';

const allReducers = combineReducers({
  articles: ArticleReducer,
  activeArticle: ActiveArticle
});

export default allReducers;
