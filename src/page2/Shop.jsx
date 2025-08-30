
import { useState } from 'react'
import { categories, products, priceFilter } from './Data.js';
import CategorySidebar from './CategorySidebar';
import ProductGrid from './ProductGrid';
import './Shop.css'
import "../Barsection"
import Barsection from '../Barsection';
import Sectionn6 from '../page1/Sectionn6.jsx';

export default function Shop(){

    const [filteredProducts, setFilteredProducts] = useState(products);
   const [filters, setFilters] = useState(priceFilter)

   const handleFilterchange = (newFilters) => {
  setFilters(newFilters);

  const filtered = products.filter((product) => {
    const priceMatch =
      product.currentPrice >= newFilters.priceRange[0] &&
      product.currentPrice <= newFilters.priceRange[1];

    // Handle inconsistent property names
    const categoryArray = product.categoryIds || product.categoryId || [];
    const subcategoryArray = product.subcategoryId || [];

    // Get category ID (first element) and color ID (last element)
    const categoryId = subcategoryArray[0];
    const colorId = subcategoryArray[subcategoryArray.length - 1]; // Get last element for color

    const categoryMatch =
      newFilters.selectedCategories.length === 0 ||
      newFilters.selectedCategories.includes(Number(categoryId)) ||
      categoryArray.some(id => newFilters.selectedCategories.includes(Number(id)));

    const colorMatch =
      newFilters.selectedColors.length === 0 ||
      (colorId && newFilters.selectedColors.includes(Number(colorId)));

    console.log({
      product: product.name,
      productCategoryId: categoryId,
      productColorId: colorId,
      selectedCategories: newFilters.selectedCategories,
      selectedColors: newFilters.selectedColors,
      categoryMatch: categoryMatch,
      colorMatch: colorMatch
    });

    return priceMatch && categoryMatch && colorMatch;
  });
  
  setFilteredProducts(filtered);
};

    return(
        

  <div className="page2-container">
      <Barsection/>
      <div className="categorysidebar">
      <CategorySidebar
      categories={categories}
      filters={filters}
      onFilterChange={handleFilterchange}
      products={filteredProducts}
        />
      </div>
        <div className='product-view'>
          <ProductGrid 
          products={filteredProducts}
          />
        </div>
        <div className="section6">
          <Sectionn6/>
        </div>
    </div>

        
      
    )
}