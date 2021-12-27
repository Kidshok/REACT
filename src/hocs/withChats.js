import { UseEffect, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react";
import { createChat } from "../helpers";
import { getChatList } from "../store/chats/selectors";
import {
	addChat,
	addChatWithThunk,
	offTrackingAddChatWithThunk, offTrackingRemoveChatWithThunk,
	onTrackingAddChatWithThunk, offTrackingRemoveChatWithThunk,
	removeChat, removeChatWithThunk, onTrackingRemoveChatWithThunk
} from "../store/chats/actions";
import { removeMessageByChatID, removeMessagesByChatIDWithThunk } from "../store/messages/actions";


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

		useEffect(() => {
			dispatch(onTrackingAddChatWithThunk);
			dispatch(onTrackingRemoveChatWithThunk);

			return () => {
				dispatch(offTrackingAddChatWithThunk);
				dispatch(offTrackingRemoveChatWithThunk);
			}
		}, [])


		return <Component
			{...props}
			chats={chats}
			onCreateChat={onCreateChat}
			onDeleteChat={onDeleteChat}
		/>
	}
}