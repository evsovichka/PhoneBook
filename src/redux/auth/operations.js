import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk(
  "auth/register",
  async (newUser, thunkAPI) => {
    try {
      const { data } = await axios.post("/user/signup", newUser);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (usersData, thunkAPI) => {
    try {
      return ({ data } = await axios.post("/users/login", usersData));
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (usersToken, thunkAPI) => {
    try {
      return ({ data } = await axios.post("/users/logout", usersToken));
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (usersToken, thunkAPI) => {
    try {
      return ({ data } = await axios.get("/users/current", usersToken));
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
