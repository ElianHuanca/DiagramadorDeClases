import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated",
    id: null,
    nombre: null,    
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.id = payload.id;
      state.nombre = payload.nombre;            
    },

    logout: (state) => {
      state.status = "not-authenticated";
      state.id = null;
      state.nombre = null;      
    },

    checkingCredentials: (state) => {
      state.status = "not-authenticated";
    },
  },
});

// Action creators are generated for each case reducer function.
export const { login, logout, checkingCredentials } = authSlice.actions;
