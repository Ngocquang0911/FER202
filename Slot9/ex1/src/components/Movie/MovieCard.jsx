import React, { useState } from "react";
import { Card, Button, Row, Col, Badge, Modal, Toast, ToastContainer } from "react-bootstrap";
import { movies } from "../data/movies";
import "./MovieCard.css";

export default function MovieCard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const handleAddFavourite = (movie) => {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const updated = [...favourites, movie];
    localStorage.setItem("favourites", JSON.stringify(updated));
    setShowToast(true);
  };

  const handleViewDetails = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  return (
    <div className="movie-grid container my-4">
      <Row xs={1} sm={2} md={3} className="g-4">
        {movies.map((m) => (
          <Col key={m.id}>
            <Card className="h-100 movie-card shadow-sm">
              <Card.Img
                variant="top"
                src={m.poster}
                alt={m.title}
                className="movie-poster"
              />
              <Card.Body>
                <Card.Title className="fw-semibold d-flex justify-content-between align-items-center">
                  {m.title}
                  <Badge bg="info" className="text-dark">{m.genre}</Badge>
                </Card.Title>
                <Card.Text className="text-secondary small">
                  {m.description.length > 90
                    ? m.description.substring(0, 90) + "..."
                    : m.description}
                </Card.Text>
                <div className="movie-meta mb-2">
                  <Badge bg="secondary">{m.year}</Badge>{" "}
                  <Badge bg="light" text="dark">{m.country}</Badge>{" "}
                  <Badge bg="dark">{m.duration} mins</Badge>
                </div>
                <div className="d-flex justify-content-between">
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => handleAddFavourite(m)}
                  >
                    ❤️ Add to Favourites
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleViewDetails(m)}
                  >
                    View Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal xem chi tiết */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        {selectedMovie && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedMovie.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedMovie.poster}
                alt={selectedMovie.title}
                className="img-fluid rounded mb-3"
              />
              <p>{selectedMovie.description}</p>
              <p>
                <Badge bg="info" className="text-dark">
                  {selectedMovie.genre}
                </Badge>{" "}
                <Badge bg="secondary">{selectedMovie.year}</Badge>{" "}
                <Badge bg="light" text="dark">
                  {selectedMovie.country}
                </Badge>{" "}
                <Badge bg="dark">{selectedMovie.duration} mins</Badge>
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>

      {/* Toast thông báo */}
      <ToastContainer position="bottom-end" className="p-3">
        <Toast
          bg="success"
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={2000}
          autohide
        >
          <Toast.Body className="text-white fw-semibold">
            ✅ Added to favourites!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}
