import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assests/assets';
import './searchbar.css'

function SearchBar() {

    const { search, setSearch , showSearch, setShowSearch} = useContext(ShopContext);

  return showSearch ? (
    <div className="container-fluid bg-body-secondary">
    <div className="container">
        <div className="d-flex align-items-center justify-content-center">
            <div className="position-relative w-75">
                <input 
                    type="text" 
                    placeholder="Search" 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    className="form-control pe-5 input-des1"
                />
                <img 
                    src={assets.search_icon} 
                    className="position-absolute top-50 end-0 translate-middle-y me-2 search-icon" 
                />
            </div>
            <img src={assets.cross_icon} className="ms-2 cross-icon" onClick={()=>setShowSearch(false)}/>
        </div>
    </div>
</div>

  ) : null
}

export default SearchBar



