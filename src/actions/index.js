export const ACTIVE_ARTICLE = 'ACTIVE_ARTICLE';

export function selectedArticle(id, articles) {
  // console.log("Loaded :", articles);
  return {
    type: ACTIVE_ARTICLE,
    id,
    articles
  }
}
