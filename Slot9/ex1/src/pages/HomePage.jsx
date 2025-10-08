import React from "react";
import HomeCarousel from "../components/Carousel/HomeCarousel";
import MovieCard from "../components/Movie/MovieCard";

export default function HomePage() {
  return (
    <div>
      <HomeCarousel />
      <div className="mt-4 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <h4 style={{ fontWeight: 600 }}>Featured Movies Collections</h4>
        <p className="text-secondary" style={{ fontWeight: 400 }}>
          Thêm thông tin về các bộ sưu tập phim nổi bật ở đây.
        </p>
      </div>
      <MovieCard />
    </div>
  );
}
