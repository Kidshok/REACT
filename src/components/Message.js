import { ListItem, ListItemText } from "@material-ui/core";
import { MessageInput } from "./MessageInput"
import propTypes from "prop-types"
import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";
import { Chats } from "../Routes/Chats";

export const Messages = () => {
	const { chatId } = useParams();
	const [messageList, setMessageList] = useState([]);

	const sendMessage = (author, text) => {
		const newMessageList = [...messageList];
		const newMessage = {
			author,
			text
		};
		newMessageList.push(newMessage);
		setMessageList(newMessage);
	};

	const onSendMessage = (value) => {
		sendMessage("user", value);
	};

	useEffect(() => {
		if (messageList.length === 0) {
			return;
		}

		const tail = messageList[messageList.length - 1];
		if (tail.author === "bot") {
			return;
		}

		sendMessage("bot", "Hello! Can i help u?");
	}, [messageList]);

	if (!Chats.find(({ id }) => id === chatId)) {
		return <Redirect to="/chats" />
	}

	return (
		<>
			<messageList messageList={messageList} />
			<MessageInput onSend={onSendMessage} />
		</>
	);
};
