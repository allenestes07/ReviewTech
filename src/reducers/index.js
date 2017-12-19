import { combineReducers } from 'redux';
import ArticleReducer from './reducer-articles';

const allReducers = combineReducers({
  articles: ArticleReducer
});

export default allReducers;
