export const ACTIVE_ARTICLE = 'ACTIVE_ARTICLE';

export function selectedArticle(id) {
  console.log("Loaded :", id);
  return {
    type: ACTIVE_ARTICLE,
    id
  }
}
