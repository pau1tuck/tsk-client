import { configureStore } from "@reduxjs/toolkit";
import dateTimeReducer from "@/features/datetime/store/datetime.slice";
import languageSettingsReducer from '@/redux/global/languageSettings.slice';

export const store = configureStore({
	reducer: {datetime: dateTimeReducer, languageSettings: languageSettingsReducer},
	devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
