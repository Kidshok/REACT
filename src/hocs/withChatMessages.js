import { Component } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";


export const withChatMessages = (Component) => {
	return (props) => {
		const { chatId } = useParams();
		const dispatch = useDispatch();
		const messageList = useSelector(getChatMessagesById(chatId));
		const hasChat = useSelector(hasChatById(chatId));

		const onSendMessage = (text) => {
			dispatch(sendMessageWithThunk(USER_AUTHOR, text, chatId))
		};

		return <Component
			{...props}
			messageList={messageList}
			hasChat={hasChat}
			onSendMessage={onSendMessage}
		/>
	}
}