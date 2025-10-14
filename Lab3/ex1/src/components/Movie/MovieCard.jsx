import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import "./MovieCard.css";

export default function MovieCard({ img, title, text, genre, year, country, duration, movie }) {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleAddFavourite = () => {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const updated = [...favourites, movie];
    localStorage.setItem("favourites", JSON.stringify(updated));
    setShowToast(true);
  };

  const handleViewDetails = () => {
    setShowModal(true);
  };

  return (
    <>
      <Card className="movie-card h-100">
        <div className="position-relative">
          <Card.Img variant="top" src={img} alt={title} className="movie-poster" />
          <div className="position-absolute top-0 end-0 m-2">
            <Badge bg="primary" className="shadow-sm">{genre}</Badge>
          </div>
        </div>
        
        <Card.Body className="d-flex flex-column">
          <Card.Title className="movie-title">
            <span className="title-text">{title}</span>
          </Card.Title>
          
          <Card.Text className="movie-description">
            {text && text.length > 120 ? text.substring(0, 120) + "..." : text}
          </Card.Text>
          
          <div className="movie-meta">
            <div className="d-flex flex-wrap gap-1 mb-3">
              <Badge bg="secondary" className="px-2 py-1">
                <i className="bi bi-calendar3 me-1"></i>
                {year}
              </Badge>
              <Badge bg="info" className="px-2 py-1">
                <i className="bi bi-geo-alt me-1"></i>
                {country}
              </Badge>
              <Badge bg="warning" text="dark" className="px-2 py-1">
                <i className="bi bi-clock me-1"></i>
                {duration}m
              </Badge>
            </div>
          </div>
          
          <div className="mt-auto">
            <div className="d-grid gap-2">
              <Button 
                variant="primary" 
                size="sm" 
                onClick={handleViewDetails}
                className="d-flex align-items-center justify-content-center"
              >
                <i className="bi bi-eye me-2"></i>
                View Details
              </Button>
              <Button 
                variant="outline-warning" 
                size="sm" 
                onClick={handleAddFavourite}
                className="d-flex align-items-center justify-content-center"
              >
                <i className="bi bi-heart me-2"></i>
                Add to Favourites
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Modal xem chi tiết */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={img} alt={title} className="img-fluid rounded mb-3" />
          <p>{text}</p>
          <div className="movie-meta">
            <Badge bg="info">{genre}</Badge>{" "}
            <Badge bg="secondary">{year}</Badge>{" "}
            <Badge bg="light" text="dark">{country}</Badge>{" "}
            <Badge bg="dark">{duration} mins</Badge>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
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
            Added to favourites!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}
