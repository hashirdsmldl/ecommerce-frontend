import {createSlice} from '@reduxjs/toolkit'


const STORAGE_KEY='Auth';
const intialState={
    phone: null,
    
    username:null,
    token: null,
};
const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY));
const userSlice = createSlice({
  name: 'user',
  initialState: intialState||savedState,
  reducers: {
    // actions:
    setUser(state, action) {
     
      state.phone = action.payload.phone
      state.username=action.payload.username
      state.token = action.payload.token
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    },
    removeUser(state) {
     
      state.phone = null
      state.username=null
      state.token = null
      localStorage.removeItem(STORAGE_KEY);
    },
  },
})

export const {setUser, removeUser} = userSlice.actions
export default userSlice.reducer
