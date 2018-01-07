export const ACTIVE_ARTICLE = 'ACTIVE_ARTICLE';
export const SET_SEARCH = 'SET_SEARCH';
export const HEADER_DROPWDOWN = 'HEADER_DROPWDOWN';

export function selectedArticle(id, articles) {
  // console.log("Loaded :", articles);
  return {
    type: ACTIVE_ARTICLE,
    id,
    articles
  }
}

export function setSearch(searchText) {
  // console.log("SEARCH :", searchText);
  return {
    type: SET_SEARCH,
    searchText
  }
}

export function headerDropDown(itemClicked) {
  return {
    type: HEADER_DROPWDOWN,
    itemClicked
  }
}
