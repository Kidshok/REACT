import { Redirect } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { MessageInput } from "./MessageInput"
import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";
import { useSelector, useDispatch } from 'react-redux'
import { MessageList } from "../../MessageList";

export const Messages = () => {
	const { chatId } = useParams();

	const dispatch = useDispatch();
	const messageList = useSelector(getChatMessagesById(chatId));
	const hasChat = useSelector(hasChatById(chatId));

	const sendMessage = (author, text) => {
		const newMessage = {
			author,
			text
		};
		dispatch(createMessage(newMessage, chatId))
	};

	const onSendMessage = (value) => {
		sendMessage('user', value);
	};

	useEffect(() => {
		if (!messageList || messageList.length === 0) {
			return;
		};

		const tail = messageList[messageList.length - 1];
		if (tail.author === "bot") {
			return;
		}

		sendMessage("bot", "hello");
	}, [messageList]);

	if (!hasChat) {
		return <Redirect ti="/chats" />
	}

	return (
		<>
			<MessageList messageList={messageList} />
			<MessageInput onSend={onSendMessage} />
		</>
	);
};