import React from 'react';

const FilterCard = ({ category, setCategory, categories }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h6 className="card-title mb-2">Filter</h6>
        <label htmlFor="category-select" className="form-label">Category</label>
        <select
          id="category-select"
          className="form-select"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="">All categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterCard;
