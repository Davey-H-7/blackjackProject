const baseURL ='https://www.deckofcardsapi.com/api/deck/new/draw/?count=52'

export const getDeck = (() => {
  return fetch(baseURL)
  .then(res => res.json())
});
