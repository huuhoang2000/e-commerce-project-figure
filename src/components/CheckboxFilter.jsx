// CheckboxFilter.js
import React from 'react';

const CheckboxFilter = ({ categories, handleCategoryChange, selectedCategories  }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      {categories && categories.map(category => (
        <div key={category}>
          <input
            type="checkbox"
            id={category}
            name={category}
            checked={selectedCategories[category] || false}
            onChange={handleCategoryChange}
          />
          <label htmlFor={category}>{category}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxFilter;
