import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state
interface LanguageSettingsState {
  locale: string | null;
  language: string | null;
}

const initialState: LanguageSettingsState = {
  locale: null, // Both initially null, to be set by the browser or user settings
  language: null,
};

// Thunk for initializing user settings
export const initializeLanguageSettings = createAsyncThunk(
  'LanguageSettings/initialize',
  async (_, { dispatch, getState }) => {
    const state = getState() as { LanguageSettings: LanguageSettingsState };

    if (!state.LanguageSettings.locale) {
      const browserLocale = navigator.language || 'en-US';
      dispatch(setLocale(browserLocale));
    }

    // Similar logic for language, if necessary
  }
);

// Create the slice
export const LanguageSettingsSlice = createSlice({
  name: 'LanguageSettings',
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<string>) => {
      state.locale = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    // other reducers if necessary
  },
  // extraReducers to handle async thunks if needed
});

export const { setLocale, setLanguage } = LanguageSettingsSlice.actions;

export default LanguageSettingsSlice.reducer;
