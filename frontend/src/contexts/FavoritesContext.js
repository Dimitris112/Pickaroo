import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useHistory } from "react-router";

export const FavoritesContext = createContext();
export const SetFavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);
export const useSetFavorites = () => useContext(SetFavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const history = useHistory();

  const handleMount = async () => {
    try {
      const { data } = await axiosRes.get("/favorites/");
      setFavorites(data);
    } catch (err) {
      console.error("Error fetching favorites:", err);
      history.push("/error");
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  // Add favorite
  const addFavorite = async (itemId) => {
    try {
      const { data } = await axiosReq.post(`/favorites/${itemId}/`);
      setFavorites((prevFavorites) => [...prevFavorites, data]);
    } catch (err) {
      console.error("Error adding favorite:", err);
    }
  };

  // Remove favorite
  const removeFavorite = async (itemId) => {
    try {
      await axiosReq.delete(`/favorites/${itemId}/`);
      setFavorites((prevFavorites) =>
        prevFavorites.filter((fav) => fav.id !== itemId)
      );
    } catch (err) {
      console.error("Error removing favorite:", err);
    }
  };

  return (
    <FavoritesContext.Provider value={favorites}>
      <SetFavoritesContext.Provider value={{ addFavorite, removeFavorite }}>
        {children}
      </SetFavoritesContext.Provider>
    </FavoritesContext.Provider>
  );
};
