import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useHistory } from "react-router";

export const ListingsContext = createContext();
export const SetListingsContext = createContext();

export const useListings = () => useContext(ListingsContext);
export const useSetListings = () => useContext(SetListingsContext);

export const ListingsProvider = ({ children }) => {
  const [listings, setListings] = useState([]);
  const history = useHistory();

  // Fetch listings on mount
  const handleMount = async () => {
    try {
      const { data } = await axiosRes.get("/listings/");
      setListings(data);
    } catch (err) {
      console.error("Error fetching listings:", err);
      history.push("/error");
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  // Add a new listing
  const addListing = async (newListing) => {
    try {
      const { data } = await axiosReq.post("/listings/", newListing);
      setListings((prevListings) => [...prevListings, data]);
    } catch (err) {
      console.error("Error adding listing:", err);
    }
  };

  // Remove a listing
  const removeListing = async (listingId) => {
    try {
      await axiosReq.delete(`/listings/${listingId}/`);
      setListings((prevListings) =>
        prevListings.filter((listing) => listing.id !== listingId)
      );
    } catch (err) {
      console.error("Error removing listing:", err);
    }
  };

  useMemo(() => {
    axiosReq.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          history.push("/signin");
        }
        return Promise.reject(error);
      }
    );
  }, [history]);

  return (
    <ListingsContext.Provider value={listings}>
      <SetListingsContext.Provider value={{ addListing, removeListing }}>
        {children}
      </SetListingsContext.Provider>
    </ListingsContext.Provider>
  );
};
