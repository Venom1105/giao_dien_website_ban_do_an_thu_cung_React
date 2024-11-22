
import { Route, Routes } from 'react-router-dom';
import '../App.css';
import BodyHome from './BodyHome';
import Contact from './Contact';
import FooterHome from './FooterHome';
import Login from './Login';
import Menu from './Menu';
import Product from './Product';
import Register from './Register';
// import { useState } from 'react';
import Cart from './Cart';
import Checkout from './Checkout';

function App() {





// //State chứa data để xóa
// // const [dataOrderProduct, setDataOrderProduct] = useState(dt);

// //Chức năng search
// //State chứa thông thông tin cần Search
// const [keyContent,setKeyContent] = useState('');

// //Hàm lấy thông tin tìm kiếm từ Search trong menu gửi lên cha
// const getKeySearch = (info) =>{
//   setKeyContent(info); // Cập nhật trạng thái 'keyContent' với từ khóa tìm kiếm
// }

// //Mảng lưu kết quả, ban đầu là mảng rỗng
// var result =[];
// //So sánh dữ liệu nhập vào và trong dataProduct
// dataProduct.forEach((item) =>{
//   if (item.name.indexOf(keyContent) !== -1) {result.push(item)}
// })

//Chức năng Xóa sản phẩm
//hàm xóa sản phẩm
// const deleteProduct = (productId) =>{
//   var tempData = dataOrderProduct.filter(item => item.id !== productId);
//   setDataOrderProduct(tempData);
//   alert("Bạn có muốn xóa sản phẩm?");
// }

  return (
    <div className="App">
    {/* getKeySearch={(info) => getKeySearch(info)} */}
        <Menu ></Menu>
        <Routes>
          <Route path='/' element={<BodyHome/>}/>
          {/* data={result} */}
          <Route path='/product' element={<Product />}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          {/* dl={dataOrderProduct} 
                                              deleteProduct = {(productId) => deleteProduct(productId)} */}
          <Route path='/cart' element={<Cart />}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        <FooterHome></FooterHome>
    </div>
  );
}

export default App;
