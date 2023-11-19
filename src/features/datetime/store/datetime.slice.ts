import { createSlice } from "@reduxjs/toolkit";

interface DatetimeState {
	current: Date;
}

const initialState: DatetimeState = {
	current: new Date(), // Initialize with the current date and time
};

export const datetimeSlice = createSlice({
	name: "datetime",
	initialState,
	reducers: {
		updateDatetime: (state) => {
			state.current = new Date(); // Update the state with the new datetime
		},
	},
});

export const { updateDatetime } = datetimeSlice.actions;

export default datetimeSlice.reducer;
