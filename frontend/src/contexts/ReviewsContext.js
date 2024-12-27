import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useHistory } from "react-router";

export const ReviewsContext = createContext();
export const SetReviewsContext = createContext();

export const useReviews = () => useContext(ReviewsContext);
export const useSetReviews = () => useContext(SetReviewsContext);

export const ReviewsProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);
  const history = useHistory();

  // Fetch reviews on mount
  const handleMount = async () => {
    try {
      const { data } = await axiosRes.get("/reviews/");
      setReviews(data);
    } catch (err) {
      console.error("Error fetching reviews:", err);
      history.push("/error");
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  // Add review
  const addReview = async (reviewData) => {
    try {
      const { data } = await axiosReq.post("/reviews/", reviewData);
      setReviews((prevReviews) => [...prevReviews, data]);
    } catch (err) {
      console.error("Error adding review:", err);
    }
  };

  // Delete review
  const deleteReview = async (reviewId) => {
    try {
      await axiosReq.delete(`/reviews/${reviewId}/`);
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review.id !== reviewId)
      );
    } catch (err) {
      console.error("Error deleting review:", err);
    }
  };

  // Report review
  const reportReview = async (reviewId) => {
    try {
      await axiosReq.post(`/reviews/${reviewId}/report/`);
      alert("Review reported");
    } catch (err) {
      console.error("Error reporting review:", err);
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
    <ReviewsContext.Provider value={reviews}>
      <SetReviewsContext.Provider value={{ addReview, deleteReview, reportReview }}>
        {children}
      </SetReviewsContext.Provider>
    </ReviewsContext.Provider>
  );
};
