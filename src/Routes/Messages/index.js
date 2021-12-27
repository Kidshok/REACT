import { Redirect } from "react-router-dom";
import { MessageInput } from "./MessageInput"
import { Redirect } from "react-router";
import { withChatMessages } from "../../hocs/withChatMessages";



export const MessagesRender = ({
	MessageList,
	hasChat,
	onSendMessage,
}) => {
	if (!hasChat) {
		return <Redirect to="/chats" />
	}

	return (
		<>
			<MessageList messageList={messageList} />
			<MessageInput onSend={onSendMessage} />
		</>
	);
};

export const Messages = withChatMessages(MessagesRender)