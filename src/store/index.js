import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

import rootReducer from "./rootReducer";
import { reactotron } from "../config/ReactotronConfig";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: hardSet,
};

const pReducer = persistReducer(persistConfig, rootReducer);
const initialState = {};
const middleware = [thunk];
const store = createStore(
  pReducer,
  initialState,
  compose(applyMiddleware(...middleware), reactotron.createEnhancer())
);

const persistor = persistStore(store);

export { persistor, store, storage };
