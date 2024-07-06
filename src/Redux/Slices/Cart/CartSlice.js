import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        totalQuantity: 0,
        totalAmount: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            console.log(item);
            const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);
            
            state.totalQuantity++;
            state.totalAmount += item.Price;

            if(!existingItem) {
                state.cartItems.push({
                    ...item, 
                    quantity: 1,
                    totalPrice: item.Price
                });
                console.log("new item added");
            }
            else {
                existingItem.quantity++;
                existingItem.totalPrice += item.Price;
                console.log("item quantity increased");
            }
        },

        removeFromCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);

            state.totalQuantity--;
            state.totalAmount -= item.Price;

            if(existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== item.id);
            }
            else {
                existingItem.quantity--;
                existingItem.totalPrice -= item.Price;
            }
        },

        clearCart: (state) => {
            state.cartItems = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;