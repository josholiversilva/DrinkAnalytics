import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import timeTypeReducer from '../features/timeType/timeTypeSlice';
import loginReducer from '../features/login/loginSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        timeType: timeTypeReducer,
        login: loginReducer
    }
});

/*
// This is typescript stuff
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
*/