/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, Nfa, Profile, ProfileState } from "state/types";
import getProfile from "./getProfile";

const initialState: ProfileState = {
  isInitialized: false,
  isLoading: true,
  data: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    profileFetchStart: (state) => {
      state.isLoading = true;
    },
    profileFetchSucceeded: (state, action: PayloadAction<Profile>) => {
      state.isInitialized = true;
      state.isLoading = false;
      state.data = action.payload;
    },
    profileFetchFailed: (state) => {
      state.isLoading = false;
      state.isInitialized = true;
    },
    profileClear: () => ({
      ...initialState,
      isLoading: false,
    }),
  },
});

// Actions
export const {
  profileFetchStart,
  profileFetchSucceeded,
  profileFetchFailed,
  profileClear,
} = profileSlice.actions;

// Thunks
export const fetchProfile =
  (nfas: Nfa[], chainId: number, address: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(profileFetchStart());
      const profile = await getProfile(nfas, chainId, address);
      dispatch(profileFetchSucceeded(profile));
    } catch (error) {
      dispatch(profileFetchFailed());
    }
  };

export default profileSlice.reducer;
