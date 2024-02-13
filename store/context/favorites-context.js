import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  ids: [],
  addFovourite: (id) => {},
  removeFavourite: (id) => {},
});

function FavouritesContextProvider({ children }) {
  const [favouriteMealIds, SetFavouriteMealIds] = useState([]);

  const addFovourite = (id) => {
    SetFavouriteMealIds((currentFavIds) => [...currentFavIds, id]);
  };

  const removeFavourite = (id) => {
    SetFavouriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favouriteMealIds,
    addFovourite: addFovourite,
    removeFavourite: removeFavourite,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
}
export default FavouritesContextProvider;
