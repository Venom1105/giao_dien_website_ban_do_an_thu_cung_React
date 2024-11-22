import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import variablesSlice from "./slices/variablesSlice";
import searchSlide from "./slices/searchSlide";



// Configure Store
const store = configureStore({
  reducer: { cart: productSlice.reducer, variables: variablesSlice.reducer, search: searchSlide },
 
});

// Select Products
export const selectProducts = (state) => state.cart;
// Select Variable totalItems
export const selectTotalItems = (state) => state.variables.totalItems;
// Select Variable totalAmount
export const selectTotalAmount = (state) => state.variables.totalAmount;

// Select Sản phẩm Đã Lọc
export const selectFilteredProducts = (state) => {
  const searchQuery = state.search.toLowerCase();
  const products = state.cart || []; // Thêm điều kiện để tránh lỗi undefined
  return products.filter(product =>
    product.title.toLowerCase().includes(searchQuery)
  );
};

// Export stuff
export const { setTotalItems, setTotalAmount} = variablesSlice.actions;
export const {
  add,
  remove,
  emptyCart,
  incrementProduct,
  decrementProduct,
} = productSlice.actions;
export { productSlice, variablesSlice, store };
export { setSearchQuery } from "../store/slices/searchSlide"; //xuất khẩu setSearchQuery từ searchSlice

