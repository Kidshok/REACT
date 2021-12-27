import { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import {
	addMessageWithThunk,
	offTrackingAddChatWithThunk, offTrackingRemoveChatWithThunk,
	onTrackingAddChatWithThunk, onTrackingRemoveChatWithThunk
} from "../store/messages/actions";
import { getChatMessagesListById } from "../store/messages/selectors";
import { hasChatById } from "../store/chats/selectors";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { createMessage } from "../store/user/selectors";


export const withChatMessages = (Component) => {
	return (props) => {
		const { chatId } = useParams();
		const dispatch = useDispatch();
		const iserId = useSelector(getiserId);
		const messageList = useSelector(getChatMessagesById(chatId));
		const hasChat = useSelector(hasChatById(chatId));

		const onSendMessage = (text) => {
			const message = createMessage(userId, text)
			dispatch(addMessageWithThunk(message, chatId))
		};

		useEffect(() => {
			dispatch(onTrackingAddMessageWithThunk(chatId))
			dispatch(onTrackingRemoveessagetWithThunk)

			return () => {
				dispatch(offTrackingAddMessageWithThunk)
				dispatch(offTrackingRemoveMessageWithThunk)
			}
		}, [chatId])

		return <Component
			{...props}
			messageList={messageList}
			hasChat={hasChat}
			onSendMessage={onSendMessage}
		/>
	}
}