import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const poojaOrderSlice = createSlice({
  name: "poojaOrder",
  initialState: {
    poojaOrders: [],
    totalPrice:0
  },
  reducers: {
    addPoojaOrder: (state, action) => {
      state.poojaOrders.push({
        poojaName: action.payload.poojaName,
        devoteeName: action.payload.devoteeName,
        birthStar: action.payload.birthStar,
        poojaPrice: action.payload.poojaPrice,
        poojaTime: action.payload.poojaTime,
      });
      state.totalPrice = parseFloat(action.payload.poojaPrice) + parseFloat(state.totalPrice);
      toast.success("Pooja order added successfully!");
    },
    resetPoojaOrders: (state) => {
      state.poojaOrders = [];
      state.totalPrice = 0;
    },
  },
});

export const { addPoojaOrder, resetPoojaOrders } = poojaOrderSlice.actions;
export default poojaOrderSlice.reducer;
