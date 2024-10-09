import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "../redux/contactsSlice";
import { searchReducer } from "../redux/filtersSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "contacts",
  storage,
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, contactsReducer),
    filters: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
