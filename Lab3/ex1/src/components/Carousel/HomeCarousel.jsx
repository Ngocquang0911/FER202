import React from "react";
import { Carousel, Badge } from "react-bootstrap";
import { carouselMovies } from "../data/carousel"; // hoặc "../../data/carousel" nếu data nằm ngoài components

export default function HomeCarousel() {
  if (!Array.isArray(carouselMovies) || carouselMovies.length === 0) return null;

  return (
    <Carousel interval={3000} data-bs-theme="dark" fade>
      {carouselMovies.map((m) => (
        <Carousel.Item key={m.id}>
          {/* Ảnh nền */}
          <img
            className="d-block w-100"
            src={m.poster}
            alt={m.title}
            style={{
              height: 420,
              objectFit: "cover",
              filter: "brightness(85%)", // làm tối ảnh nhẹ để chữ nổi bật
            }}
          />

          {/* Caption hiển thị tiêu đề, thể loại, mô tả */}
          <Carousel.Caption
            className="text-start"
            style={{
              background: "rgba(0, 0, 0, 0.45)",
              borderRadius: 12,
              padding: "1rem 1.25rem",
              maxWidth: 720,
              fontFamily: "Poppins, sans-serif",
              color: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            }}
          >
            {/* Tiêu đề phim */}
            <h3
              className="mb-2"
              style={{
                fontWeight: 600,
                color: "#ffd700", // vàng ánh kim nổi bật
                letterSpacing: "0.3px",
              }}
            >
              {m.title}{" "}
              <Badge bg="info" className="text-dark ms-1">
                {m.genre}
              </Badge>{" "}
              <Badge bg="secondary">{m.year}</Badge>
            </h3>

            {/* Mô tả phim */}
            <p
              className="mb-0"
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.4,
                color: "#f1f1f1",
              }}
            >
              {m.description}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
