import { BOT_AUTHOR } from "../../constants/authors";
import { creatMessage } from "../../helpers"


export const ADD_MESSAGE = 'ADD_MESSAGE'
export const REMOVE_MESSAGES_BY_CHAT_ID = 'REMOVE_MESSAGES_BY_CHAT_ID'

export const addMessage = (message, chatId) => ({
	type: ADD_MESSAGE,
	payload: {
		message,
		chatId,
	},
})

export const removeMessageByChatID = (chatId) => ({
	type: REMOVE_MESSAGES_BY_CHAT_ID,
	payload: chatId
})

export const sendMessageWithThunk = (author, text, chatId) => dispatch => {
	const userMessage = creatMessage(author, text)
	dispatch(addMessage(userMessage, chatId));

	if (author === BOT_AUTHOR) {
		return;
	}

	const botMessage = creatMessage(BOT_AUTHOR, 'hello')

	dispatch(addMessage(botMessage, chatId));
}