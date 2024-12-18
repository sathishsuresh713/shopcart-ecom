import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext';
import ProductItem from '../Components/ProductItem';
import downarrow from '../assests/down-arrow.png'
import SearchBar from '../Components/SearchBar';

function Collection() {
  const { products, search , showSearch } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filtersVisible, setFiltersVisible] = useState(false); // State to toggle filters visibility
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevent');

const toggleCategory = (e) =>{
  if(category.includes(e.target.value)){
    setCategory(prev=> prev.filter(item => item !== e.target.value))
  }
  else{
    setCategory(prev=> [...prev,e.target.value])
  }
}

const toggleSubCategory = (e) =>{
  if(subCategory.includes(e.target.value)){
    setSubCategory(prev=> prev.filter(item => item !== e.target.value))
  }
  else{
    setSubCategory(prev=> [...prev,e.target.value])
  }
}



const applyFilter = ()=>{
  let productsCopy = products.slice();

  if(showSearch && search){
    productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
  }

  if(category.length > 0){
    productsCopy = productsCopy.filter(item => category.includes(item.category))
  }

  if(subCategory.length > 0){
    productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
  }

  setFilteredProducts(productsCopy)
}

const sortProduct = ()=>{
  let fpCopy = filteredProducts.slice()

  switch (sortType) {
    case 'low to high':
      setFilteredProducts(fpCopy.sort((a,b) => a.price - b.price))
      break;

    case 'high to low':
      setFilteredProducts(fpCopy.sort((a,b) => b.price - a.price))
      break;

    default:
      applyFilter();
      break;
  }
}

useEffect(() => {
  sortProduct();
},[sortType])

useEffect(() => {
  applyFilter();
},[category, subCategory,search,showSearch])



  return (
    <>
    <SearchBar/>
    <div className="container my-lg-5">
      <div className="row">
        {/* Filters Section */}
        <div className="col-12 col-lg-3">
          <div>
            <h3 className="fw-bold d-flex align-items-center">
              FILTERS
              <img
                src={downarrow}
                onClick={() => setFiltersVisible(!filtersVisible)}
                style={{ cursor: "pointer", marginLeft: "10px" }}
                alt="Toggle Filters"
              />
            </h3>
          </div>
          <div
            className={`border border-dark p-3 my-3 ${filtersVisible ? "" : "d-none d-lg-block"}`}
          >
            <h3 className="fw-bold">CATEGORIES</h3>
            <p>
              <input type="checkbox" value={"Men"} onChange={toggleCategory} /> Men
            </p>
            <p>
              <input type="checkbox" value={"Women"} onChange={toggleCategory}/> Women
            </p>
            <p>
              <input type="checkbox" value={"Kids"} onChange={toggleCategory}/> Kids
            </p>
          </div>
          <div
            className={`border border-dark p-3 my-3 ${filtersVisible ? "" : "d-none d-lg-block"}`}
          >
            <h3 className="fw-bold">TYPE</h3>
            <p>
              <input type="checkbox" value={"Topwear"}  onChange={toggleSubCategory}/> TopWear
            </p>
            <p>
              <input type="checkbox" value={"Bottomwear"} onChange={toggleSubCategory} /> BottomWear
            </p>
            <p>
              <input type="checkbox" value={"Winterwear"} onChange={toggleSubCategory} /> WinterWear
            </p>
          </div>
        </div>

        {/* Products Section */}
        <div className="col-lg-9">
          <div className="d-flex justify-content-between align-items-center">
            <p className="fw-bold text-secondary fs-4 ">ALL COLLECTIONS</p>
            <select className="p-1" onChange={(e)=>setSortType(e.target.value)}>
              <option value={"relevent"}>Sort By: Relevent</option>
              <option value={"low to high"}>Sort By: Low to High</option>
              <option value={"high to low"}>Sort By: High to Low</option>
            </select>
          </div>
          <div className="row">
            {filteredProducts.map((item, index) => {
              return (
                <div className="col-12 col-md-4 col-lg-3 mb-4" key={index}>
                  <ProductItem
                    id={item._id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}


export default Collection
