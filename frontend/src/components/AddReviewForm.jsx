import React, { useState } from "react";
import axios from "axios";
import { Alert, Button, Form } from "react-bootstrap";
import styles from "../styles/AddReviewForm.module.css";

function AddReviewForm({ listingId }) {
  const [reviewData, setReviewData] = useState({
    rating: 1, // Default to 1 star
    review: "",
  });
  const [errors, setErrors] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { rating, review } = reviewData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReviewData({
      ...reviewData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `/api/reviews/${listingId}/`,
        reviewData
      );
      // Reset form if successful
      setReviewData({ rating: 1, review: "" });
      setErrors(null);
      alert("Review submitted successfully!");
    } catch (err) {
      setErrors(err.response?.data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Add a Review</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="rating">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            name="rating"
            value={rating}
            onChange={handleChange}
            className={styles.inputField}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <option key={star} value={star}>
                {star} {star === 1 ? "Star" : "Stars"}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="review">
          <Form.Label>Review</Form.Label>
          <Form.Control
            as="textarea"
            name="review"
            value={review}
            onChange={handleChange}
            rows={4}
            className={styles.inputField}
          />
        </Form.Group>

        {errors && (
          <Alert variant="danger">
            {errors.non_field_errors || "An error occurred while submitting your review."}
          </Alert>
        )}

        <Button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Review"}
        </Button>
      </Form>
    </div>
  );
}

export default AddReviewForm;
