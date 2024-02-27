import { createContext } from "react";

const FavoritesContext = createContext({
    ids: [],
    addFavourite: ()=>{},
    removeFavourite: (id) => {}
});

function FavoritesContextProvider({children}) {
    return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;