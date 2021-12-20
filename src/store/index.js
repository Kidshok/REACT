import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { profileReducer } from "./profile/reducer";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { messageReducer } from "./message/reducer";
import { chatsReducer } from "./chats/reducer";

const persistConfig = {
	key: 'root',
	storage,
}

const rootReducer = combineReducers({
	profile: profileReducer,
	messages: messageReducer,
	chats: chatsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION__COMPOSE__ || compose

export const store = createStore(
	persistReducer,
	composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store)
