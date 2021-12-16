import { CREATE_MESSAGE, REMOVE_MESSAGES_BY_CHAT_ID } from "./actions";

const initialState = {
	messaages: {},
}

export const messagesReducer = (state = initialState, action) => {

	switch (action.type) {
		case CREATE_MESSAGE: {
			const {
				message,
				chatId,
			} = action, payload;

			constnewMessages = { ...state.messages };

			newMessages[chatId] = [
				...state(newMessages[chatId] || []),
				message,
			]

			return {
				messages: newMessages
			}
		}

		case REMOVE_MESSAGES_BY_CHAT_ID: {

			if (!state.messages.hasOwnProperty(action.payload)) {
				return state
			}

			const newMessages = { ...state.messages };
			delete newMessages[action.pyload];

			return {
				messages: newMessages
			}
		}

		default: {
			return state;
		}
	}
}