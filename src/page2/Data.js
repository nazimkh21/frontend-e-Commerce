
import sofa1 from '../assets/sofa1.jpg'
import sofa2 from '../assets/sofa2.jpg'
import sofa3 from '../assets/sofa3.jpg'
import sofa4 from '../assets/sofa4.jpg'
import sofa5 from '../assets/sofa5.jpg'
import sofa6 from '../assets/sofa6.jpg'
import sofa7 from '../assets/sofa7.jpg'
import sofa8 from '../assets/sofa8.jpg'
import sofa9 from '../assets/sofa9.jpg'
import sofa10 from '../assets/sofa10.jpg'
import sofa11 from '../assets/sofa11.jpg'
import sofa12 from '../assets/sofa12.jpg'
import sofa13 from '../assets/sofa13.jpg'
import sofa14 from '../assets/sofa14.jpg'
import sofa15 from '../assets/sofa15.jpg'
import sofa16 from '../assets/sofa16.jpg'
import sofa17 from '../assets/sofa17.jpg'
import sofa18 from '../assets/sofa18.jpg'

// chairs section


import chair1 from '../assets/chair1.jpg'
import chair2 from '../assets/chair2.jpg'
import chair3 from '../assets/chair3.jpg'
import chair4 from '../assets/chair4.jpg'
import chair5 from '../assets/chair5.jpg'
import chair6 from '../assets/chair6.jpg'
import chair7 from '../assets/chair7.jpg'
import chair8 from '../assets/pic3.jpg'
import chair9 from '../assets/chair9.jpg'










// src/data.js
export const categories = [
  {
    id: 1,
    name: "Category",
    subcategories: [
      { id: 101, name: "Sofa", productCount: 25 },  // Changed 'count' to 'productCount'
      { id: 102, name: "Chairs", productCount: 25 },
      // ... (all other subcategories)
    ]
  },
  {
    id:2,
    name:"Color",
    subcategories:[
        { id:201, name: "Black", productCount: 25 },
        {id:202, name: "Blue", productCount: 25 },
        {id:203, name: "Green", productCount: 25 },
        {id:204, name: "Grey", productCount: 25 },
        {id:205, name: "white", productCount: 25 },
        {id:206, name:"brown", productCount: 25},
        {id:207, name:"red", productCount: 25}

    ]

  }
];

export const products = [
  {
    id: 1,
    name: "Modem sofa",
    currentPrice: 100.00,  // Renamed from 'price' for clarity
    categoryIds:[1,2],        // Links to 'Calling' category
    subcategoryId: [101,206],  // Links to 'Modem' subcategory
    Img: sofa1,
    dateAdded: new Date().toISOString() // saves the exact date & time of adding
  
  },
  {
    id: 2,
    name: "Modem sofa",
    currentPrice: 90.00,  // Renamed from 'price' for clarity
    categoryId:[1,2],        // Links to 'Calling' category
    subcategoryId: [101,202],  // Links to 'Modem' subcategory
    Img: sofa2,
    dateAdded: new Date().toISOString() // saves the exact date & time of adding


  },
  {
    id: 3,
    name: "Modem sofa",
    currentPrice: 120.00,  // Renamed from 'price' for clarity
    categoryId:[1,2],        // Links to 'Calling' category
    subcategoryId: [101,202] ,  // Links to 'Modem' subcategory
    Img: sofa3 ,
    dateAdded: new Date().toISOString() // saves the exact date & time of adding


  },
   {
    id: 4,
    name: "Modem sofa",
    currentPrice: 200.00,  // Renamed from 'price' for clarity
    categoryId:[1,2],        // Links to 'Calling' category
    subcategoryId: [101,205] ,  // Links to 'Modem' subcategory
    Img: sofa4,
    dateAdded: new Date().toISOString() // saves the exact date & time of adding

  },
   {
    id: 5,
    name: "Modem sofa",
    currentPrice: 190.00,  // Renamed from 'price' for clarity
    categoryId:[1,2],        // Links to 'Calling' category
    subcategoryId: [101,203] ,  // Links to 'Modem' subcategory
    Img: sofa5,
    dateAdded: new Date().toISOString() // saves the exact date & time of adding

  },
   {
    id: 6,
    name: "Modem sofa",
    currentPrice: 220.00,  // Renamed from 'price' for clarity
    categoryId:[1,2],        // Links to 'Calling' category
    subcategoryId: [101,204] ,  // Links to 'Modem' subcategory
    Img: sofa6,
    dateAdded: new Date().toISOString() // saves the exact date & time of adding

  },
   {
    id: 7,
    name: "Modem sofa",
    currentPrice: 240.00,  // Renamed from 'price' for clarity
    categoryId:[1,2],        // Links to 'Calling' category
    subcategoryId: [101,204] ,  // Links to 'Modem' subcategory
    Img: sofa7,
    dateAdded: new Date().toISOString() // saves the exact date & time of adding

  },
   {
    id: 8,
    name: "Modem sofa",
    currentPrice: 150.00,  // Renamed from 'price' for clarity
    categoryId:[1,2],        // Links to 'Calling' category
    subcategoryId: [101,203] ,  // Links to 'Modem' subcategory
    Img: sofa8,
    dateAdded: new Date().toISOString() // saves the exact date & time of adding

  },
   {
    id: 9,
    name: "Modem sofa",
    currentPrice: 199.99,  // Renamed from 'price' for clarity
    categoryId:[1,2],        // Links to 'Calling' category
    subcategoryId: [101,204,205] ,  // Links to 'Modem' subcategory
    Img: sofa9,
    dateAdded: new Date().toISOString() // saves the exact date & time of adding

  },
  {
  id: 10,
  name: "Modem sofa",
  currentPrice: 90.00,  // Renamed from 'price' for clarity
  categoryId:[1,2],        // Links to 'Calling' category
  subcategoryId: [101,207] ,  // Links to 'Modem' subcategory
  Img: sofa10 ,
  dateAdded: new Date().toISOString() // saves the exact date & time of adding


},
  {
    id: 11,
    name: "Modem sofa",
    currentPrice: 95.00,  // Renamed from 'price' for clarity
    categoryId:[1,2],        // Links to 'Calling' category
    subcategoryId: [101,206] ,  // Links to 'Modem' subcategory
    Img: sofa11,
    dateAdded: new Date().toISOString() // saves the exact date & time of adding

  },
  {
    id: 12,
    name: "Modem sofa",
    currentPrice: 85.00,  // Renamed from 'price' for clarity
    categoryId:[1,2],        // Links to 'Calling' category
    subcategoryId: [101,202] ,  // Links to 'Modem' subcategory
    Img: sofa12,
    dateAdded: new Date().toISOString() // saves the exact date & time of adding

  },
  {
    id: 13,
    name: "Modem sofa",
    currentPrice: 92.00,  // Renamed from 'price' for clarity
    categoryId:[1,2],        // Links to 'Calling' category
    subcategoryId: [101,205] ,  // Links to 'Modem' subcategory
    Img: sofa13,
    dateAdded: new Date().toISOString() // saves the exact date & time of adding

  },
  {
    id: 14,
    name: "Modem sofa",
    currentPrice: 77.00,  // Renamed from 'price' for clarity
    categoryId:[1,2],        // Links to 'Calling' category
    subcategoryId: [101,203] ,  // Links to 'Modem' subcategory
    Img: sofa14,
    dateAdded: new Date().toISOString() // saves the exact date & time of adding

  },
  {
    id: 15,
    name: "Modem sofa",
    currentPrice: 100.00,  // Renamed from 'price' for clarity
    categoryId:[1,2],        // Links to 'Calling' category
    subcategoryId: [101,206] ,  // Links to 'Modem' subcategory
    Img: sofa15,
    dateAdded: new Date().toISOString() // saves the exact date & time of adding

  },
  {
    id: 16,
    name: "Modem sofa",
    currentPrice: 110.00,  // Renamed from 'price' for clarity
    categoryId:[1,2],        // Links to 'Calling' category
    subcategoryId: [101,205] ,  // Links to 'Modem' subcategory
    Img: sofa16,
    dateAdded: new Date().toISOString() // saves the exact date & time of adding

  },
   {
    id: 17,
    name: "Modem sofa",
    currentPrice: 120.00,  // Renamed from 'price' for clarity
    categoryId:[1,2],        // Links to 'Calling' category
    subcategoryId: [101,201] ,  // Links to 'Modem' subcategory
    Img: sofa17,
    dateAdded: new Date().toISOString() // saves the exact date & time of adding

  },
   {
    id: 18,
    name: "Modem sofa",
    currentPrice: 150.00,  // Renamed from 'price' for clarity
    categoryId:[1,2],        // Links to 'Calling' category
    subcategoryId: [101,201] ,  // Links to 'Modem' subcategory
    Img: sofa18,
    dateAdded: new Date().toISOString() // saves the exact date & time of adding

  }


  // chairs section

  ,{
    id: 19,
    name: "chair",
    currentPrice: 50.00,  // Renamed from 'price' for clarity
    categoryId:[1,2],        // Links to 'Calling' category
    subcategoryId: [102,205,204] ,  // Links to 'Modem' subcategory
    Img: chair1,
    dateAdded: new Date().toISOString() // saves the exact date & time of adding

  }
   ,{
    id: 20,
    name: "chair",
    currentPrice: 60.00,  // Renamed from 'price' for clarity
    categoryId:[1,2],        // Links to 'Calling' category
    subcategoryId: [102,202] ,  // Links to 'Modem' subcategory
    Img: chair2,
    dateAdded: new Date().toISOString() // saves the exact date & time of adding

  }
    ,{
    id: 21,
    name: "chair",
    currentPrice: 60.00,  // Renamed from 'price' for clarity
    categoryId:[1,2],        // Links to 'Calling' category
    subcategoryId: [102,205] ,  // Links to 'Modem' subcategory
    Img: chair3,
    dateAdded: new Date().toISOString() // saves the exact date & time of adding

  }
    ,{
    id: 22,
    name: "chair",
    currentPrice: 65.00,  // Renamed from 'price' for clarity
    categoryId:[1,2],        // Links to 'Calling' category
    subcategoryId: [102,202] ,  // Links to 'Modem' subcategory
    Img: chair4,
    dateAdded: new Date().toISOString() // saves the exact date & time of adding

  }
  ,{
    id: 23,
    name: "chair",
    currentPrice: 60.00,  // Renamed from 'price' for clarity
    categoryId:[1,2],        // Links to 'Calling' category
    subcategoryId: [102,202] ,  // Links to 'Modem' subcategory
    Img: chair5,
    dateAdded: new Date().toISOString() // saves the exact date & time of adding

  }
  ,{
    id: 24,
    name: "chair",
    currentPrice: 57.00,  // Renamed from 'price' for clarity
    categoryId:[1,2],        // Links to 'Calling' category
    subcategoryId: [102,204] ,  // Links to 'Modem' subcategory
    Img: chair6,
    dateAdded: new Date().toISOString() // saves the exact date & time of adding

  }
   ,{
    id: 25,
    name: "chair",
    currentPrice: 50.00,  // Renamed from 'price' for clarity
    categoryId:[1,2],        // Links to 'Calling' category
    subcategoryId: [102,204] ,  // Links to 'Modem' subcategory
    Img: chair7,
    dateAdded: new Date().toISOString() // saves the exact date & time of adding

  }
  ,{
    id: 26,
    name: "chair",
    currentPrice: 49.00,  // Renamed from 'price' for clarity
    categoryId:[1,2],        // Links to 'Calling' category
    subcategoryId: [102,205] ,  // Links to 'Modem' subcategory
    Img: chair8,
    dateAdded: new Date().toISOString() // saves the exact date & time of adding

  }
  ,{
    id: 27,
    name: "chair",
    currentPrice: 51.00,  // Renamed from 'price' for clarity
    categoryId:[1,2],        // Links to 'Calling' category
    subcategoryId: [102,203] ,  // Links to 'Modem' subcategory
    Img: chair9,
    dateAdded: new Date().toISOString() // saves the exact date & time of adding

  }
  
      

  // ... (more products)
];
  // console.log(dateAdded);

export const priceFilter = {
    priceRange: [40, 300],       // From your data.js
    selectedCategories: [],     // IDs from categories array
    selectedColors: []          // IDs from subcategories
};