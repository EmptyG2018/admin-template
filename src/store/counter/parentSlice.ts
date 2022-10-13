import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};



const mockData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('async ok');
    }, 800);
  })
}


export const getMockData = createAsyncThunk( 'mock/async', 
  async () => {
    const res= await mockData();
    return res;
  }
);


export const counterSlice = createSlice({
  name: "parent",
  initialState,
  reducers: {
    parentAdd: (state) => {
      state.value += 1;
    },
    setCount: (state, { payload }) => {
      state.value = payload;
    }
  },
  extraReducers(builder) {
    builder
    .addCase(getMockData.pending, (state) => {
      console.log("🚀 ~ 进行中！")
    })
  }
});

export const { parentAdd, setCount } = counterSlice.actions;
export default counterSlice.reducer;
