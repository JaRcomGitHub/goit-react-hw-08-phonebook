import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { phonebookSlice } from "./phonebookSlice";

const persistConfig = {
    key: 'root',
    storage,
}

const phonebookReducer = persistReducer(persistConfig, phonebookSlice.reducer);

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE,
          PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
