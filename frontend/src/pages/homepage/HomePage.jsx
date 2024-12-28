import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../../styles/HomePage.module.css";

function HomePage() {
  const [featuredListings, setFeaturedListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const { data } = await axios.get("/api/listings/featured/");
        setFeaturedListings(data);
      } catch (err) {
        console.error("Failed to fetch featured listings:", err);
      }
    };

    fetchListings();
  }, []);

  return (
    <Container className={styles.HomePageContainer}>
      <Row>
        <Col md={12} className="text-center">
          <h1>Welcome to Pickaroo!</h1>
          <p>Your one-stop shop for finding the best listings in town.</p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={12}>
          <h2>Featured Listings</h2>
        </Col>

        {featuredListings.length === 0 ? (
          <Col md={12}>
            <p>No featured listings available right now.</p>
          </Col>
        ) : (
          featuredListings.map((listing) => (
            <Col md={4} key={listing.id} className="mb-4">
              <Card>
                <Card.Img variant="top" src={listing.image_url} />
                <Card.Body>
                  <Card.Title>{listing.title}</Card.Title>
                  <Card.Text>{listing.description}</Card.Text>
                  <Link to={`/listings/${listing.id}`}>
                    <Button variant="primary">View Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}

export default HomePage;
