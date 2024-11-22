import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { selectTotalItems, setSearchQuery} from "../store";
//import { setSearchQuery } from "../store/slices/searchSlide"
import Badge from '@mui/material/Badge';


export default function Menu() {
  
  // State theo dõi trạng thái đăng nhập của người dùng
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //search
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
//search

  // Kiểm tra trạng thái đăng nhập khi component được mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);


// Total
let totalItems = useSelector(selectTotalItems);

// Xử lý khi thay đổi ô tìm kiếm
const handleSearchChange = (e) => {
  setSearchText(e.target.value);
  dispatch(setSearchQuery(e.target.value));
};


  return (
    
    <nav className="navbar navbar-expand-sm navbar-dark bg-warning">
      <Link className="navbar-brand" to="/">
        <img src="./img/logo.jpg" height={60} alt="" />
      </Link>
      {/* Các nút chuyển đổi cho navbar trên thiết bị di động */}
      <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        {/* Các liên kết điều hướng */}
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link h4" to="/">Home<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link h5 mt-1" to="/product">Product</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link h5 mt-1" to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Danh mục */}
        
      
        <form className="form-inline my-2 my-lg-0" >

          {/* cart */}
          {/* Badged */}
          <div style={{marginRight: 30}}>
          <Badge badgeContent={totalItems} color="primary">
          <Link className="text-light h3 mr-3" to="/cart">
            <i className="bx bx-cart" />
          </Link>
          </Badge>
          </div>
          
          {/* Form tìm kiếm */}
          <div className='khunginput'>
            <input className="form-control mr-sm-2" type="text" placeholder="Search" 
            value={searchText} onChange={handleSearchChange}/>
            <i className="fa-regular fa-circle-xmark ic_reset"></i>
          </div>
          <button className="btn btn btn-light my-2 my-sm-0 mr-3" type="submit">
            <i className="bx bx-search" />
          </button>
          {/* Hiển thị avatar hoặc link đăng nhập tùy thuộc vào trạng thái đăng nhập */}
          {isLoggedIn ? (
            <Link className="nav-link" to="/profile" >
              <img src="./img/avatar.jpg" height={60} alt="Avatar" style={{ borderRadius: '50%' }} />
            </Link>
          ) : (
            <Link className="btn btn-warning text-white" to="/login">
              login/register
            </Link>
          )}
        </form>
      </div>
    </nav>
  );
}
