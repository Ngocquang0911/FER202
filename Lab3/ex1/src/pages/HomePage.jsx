import React, { useState, useMemo, useEffect } from "react";
import HomeCarousel from "../components/Carousel/HomeCarousel";
import MovieCard from "../components/Movie/MovieCard";
import Filter from "../components/Filter/Filter";
import { Row, Col } from "react-bootstrap";
import { movies } from "../data/movies/movies";

export default function HomePage({ onQuickSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [yearFilter, setYearFilter] = useState('all');
  const [sortBy, setSortBy] = useState('');

  // Handle quick search from NavBar
  useEffect(() => {
    if (onQuickSearch && typeof onQuickSearch === 'string' && onQuickSearch.trim() !== '') {
      setSearchTerm(onQuickSearch);
    }
  }, [onQuickSearch]);

  const handleQuickSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredAndSortedMovies = useMemo(() => {
    let filtered = [...movies];

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by year
    if (yearFilter !== 'all') {
      filtered = filtered.filter(movie => {
        switch (yearFilter) {
          case '<=2000':
            return movie.year <= 2000;
          case '2001-2015':
            return movie.year >= 2001 && movie.year <= 2015;
          case '>2015':
            return movie.year > 2015;
          default:
            return true;
        }
      });
    }

    // Sort movies
    if (sortBy) {
      filtered.sort((a, b) => {
        switch (sortBy) {
          case 'year-asc':
            return a.year - b.year;
          case 'year-desc':
            return b.year - a.year;
          case 'title-asc':
            return a.title.localeCompare(b.title);
          case 'title-desc':
            return b.title.localeCompare(a.title);
          case 'duration-asc':
            return a.duration - b.duration;
          case 'duration-desc':
            return b.duration - a.duration;
          default:
            return 0;
        }
      });
    }

    return filtered;
  }, [searchTerm, yearFilter, sortBy]);

  return (
    <div>
      <HomeCarousel />
      <div className="container mt-4">
        <div className="text-center mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <h4 style={{ fontWeight: 600 }}>Featured Movies Collections</h4>
          <p className="text-secondary" style={{ fontWeight: 400 }}>
            Discover amazing movies from our curated collection
          </p>
        </div>
        
        <Filter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          yearFilter={yearFilter}
          onYearFilterChange={setYearFilter}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
        
        <Row xs={1} md={3} className="g-4">
          {filteredAndSortedMovies.map((movie) => (
            <Col key={movie.id}>
              <MovieCard 
                img={movie.poster}
                title={movie.title}
                text={movie.description} 
                genre={movie.genre}
                year={movie.year}
                country={movie.country}
                duration={movie.duration}
                movie={movie}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
