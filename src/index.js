import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { ChatList } from "./components/ChatList"
import { MessageList } from "./components/MessageList";
import { MessageInput } from "./components/MessageInput"

const useStyles = makeStyles({
	wrapper: {
		display: "grid",
		gridTemplateColumns: "200px 1fr"
	}
});

export const App = () => {
	const classes = useStyles();
	const [messageList, setMessageList] = useState([]);

	const sendMessage = (author, text) => {
		const newMessageList = [...messageList];
		const newMessage = {
			author,
			text
		};
		newMessageList.push(newMessage);
		setMessageList(newMessageList);
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

	return (
		<div className={classes.wrapper}>
			<ChatList
				list={[
					{
						name: "name",
						id: "1"
					},
					{
						name: "name",
						id: "2"
					},
					{
						name: "name",
						id: "3"
					},
					{
						name: "name",
						id: "4"
					},
					{
						name: "name",
						id: "5"
					}
				]} />
			<div>
				<MessageList messageList={messageList} />
				<MessageInput onsend={onSendMessage} />
			</div >
		</div >
	);
};

