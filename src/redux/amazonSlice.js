// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//     products: [],
//     userInfo: [],
//   };
  
//   export const amazonSlice = createSlice({
//     name: "amazon",
//     initialState,
//     reducers: {
//       addToCart: (state, action) => {
//         const item = state.products.find((item) => item.id === action.payload.id);
//         if (item) {
//           item.quantity += action.payload.quantity;
//         } else {
//           state.products.push(action.payload);
//         }
//       },

//       incrementQuantity:(state,action)=>{
//         const item = state.products.find((item.id === action.payload)  )  
//         item.quantity++
        
//       },

//      decrementQuantity:(state,action)=>{
//         const item = state.products.find((item.id === action.payload) )  
//         if(item.quantity ===1){
//           item.quantity ==1;
//         }
//         else{
//           item.quantity--;
//         }
        
        
//       },
    
    

//       deleteItem:(state,action)=>{
//         state.products = state.products.filter((item)=> item.id!=action.payload)
//       },
//       resetCart:(state)=>{
//         state.products=[]
//       }
//     },
//   });
  
//   export const { addToCart,deleteItem,resetCart,incrementQuantity,decrementQuantity } = amazonSlice.actions;
//   export default amazonSlice.reducer;
  

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  userInfo: [],
};

 export const amazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },

   
 

    incrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },

    deleteItem: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload);
    },

    resetCart: (state) => {
      state.products = [];
    },
    filterSearch: (state, action) => {
      // Assuming you have a property like "productName" in your products
      // This action will filter the products based on the search query
      state.products = state.products.filter(item => item.category.includes(action.payload));
    },
  },
});

export const { addToCart, deleteItem, resetCart, incrementQuantity, decrementQuantity,filterSearch } = amazonSlice.actions;
export default amazonSlice.reducer;
