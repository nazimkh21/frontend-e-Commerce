import { useState } from 'react';
import "./CategorySidebar.css";

export default function CategorySidebar({ categories = [], filters = {}, onFilterChange }) {
  const [input, setInput] = useState('');

  const {
    priceRange = [40, 300],
    selectedCategories = [],
    selectedColors = []
  } = filters;

  // Extract categories and colors from your categories data
  const mainCategories = categories.find(cat => cat.name === "Category")?.subcategories || [];
  const colorCategories = categories.find(cat => cat.name === "Color")?.subcategories || [];

  // --- Handle selecting categories ---
  const handleCategorySelect = (categoryId) => {
    const updatedCategories = selectedCategories.includes(categoryId)
      ? []
      : [categoryId];

    onFilterChange({
      ...filters,
      selectedCategories: updatedCategories
    });
  };

  // --- Handle selecting colors ---
  const handleColorSelect = (colorId) => {
    const updatedColors = selectedColors.includes(colorId)
      ? []
      : [colorId];

    onFilterChange({
      ...filters,
      selectedColors: updatedColors
    });
  };

  // --- Handle price range ---
  const handlePriceChange = (e) => {
    onFilterChange({
      ...filters,
      priceRange: [priceRange[0], parseInt(e.target.value)]
    });
  };
const handleChange = (event) => {
  const value = event.target.value;
  setInput(value);

  // Find ALL matching colors in current text
  const foundColors = colorCategories.filter(color => 
    value.toLowerCase().includes(color.name.toLowerCase())
  ).map(color => color.id);

  // Find ALL matching categories in current text
  const foundCategories = mainCategories.filter(category =>
    value.toLowerCase().includes(category.name.toLowerCase())
  ).map(category => category.id);

  onFilterChange({
    ...filters,
    selectedColors: foundColors,
    selectedCategories: foundCategories
  });
};

  const inisialisation=()=>{
      onFilterChange({
        ...filters,
        selectedColors: [],
        selectedCategories:[]
      });
  }
  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          className='input'
          placeholder='Search by color...'
        />
      </div>
      
      <div className="sidebar">
        {/* Price Filter */}
        <div className="filter-group">
          <h3>Price Range</h3>
          <input
            type="range"
            min="40"
            max="300"
            value={priceRange[1]}
            onChange={handlePriceChange}
          />
          <div>${priceRange[0]} - ${priceRange[1]}</div>
        </div>
        
        {/* Categories */}
        <div className="filter-group">
          <button id="inisialisation" onClick={inisialisation}>Categories</button>
          {mainCategories.map(category => (
            <div key={category.id}>
              <button
                onClick={() => handleCategorySelect(category.id)}
                className="categotybutton"
                style={{
                    color: selectedCategories.includes(category.id) ? 'grey' : 'black',
                    fontWeight:selectedCategories.includes(category.id) ?'600': '400',
                    fontSize:selectedCategories.includes(category.id) ?'1.6rem': '1.4rem'


                }}
              >
                <span>{category.name}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Colors */}
        <div className="filter-group">
          <h3>Colors</h3>
          <div>
            {colorCategories.map(color => (
              <div key={color.id}>
                <button
                  onClick={() => handleColorSelect(color.id)}
                  className="categotybutton"
                  style={{
                  
                    color: selectedColors.includes(color.id) ? 'grey' : 'black',
                    fontWeight: selectedColors.includes(color.id) ?'570': '400',
                    fontSize: selectedColors.includes(color.id) ?'1.5rem': '1.4rem',



                  }}
                >
                  <span>{color.name}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}