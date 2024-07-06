import { configureStore } from '@reduxjs/toolkit';
import ElectronicSlice from './Slices/Products/ElectronicSlice';
import MenWearSlice from './Slices/Products/MenWearSlice';
import WomenWearSlice from './Slices/Products/WomenWearSlice';
import CartSlice from './Slices/Cart/CartSlice';

export const store = configureStore({
    reducer: {
        electronics: ElectronicSlice,
        menWear: MenWearSlice,
        womenWear: WomenWearSlice,
        cart: CartSlice
    },
})