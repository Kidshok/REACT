import { Component, useCallback } from "react";
import { useDispatch } from "react";
import { useCallback } from "react";
import { createChat, removeChat } from "../../store/chats/actions"
import { removeMessagesByChatId } from "../../store/messages/actions";


export const withChats = (Component) => {

	return (props) => {
		const chats = useSelector(getChatList);
		const dispatch = useDispatch();

		const onCreateChat = useCallback(() => {
			dispatch(addChat(createChat('chat name')))
		}, []);

		const onDeleteChat = useCallback((chatId) => {
			dispatch(removeChat(chatId))
			dispatch(removeMessagesByChatId(chatId))
		}, [])

		return <Component
			{...props}
			chats={chats}
			onCreateChat={onCreateChat}
			onDeleteChat={onDeleteChat}
		/>
	}
}