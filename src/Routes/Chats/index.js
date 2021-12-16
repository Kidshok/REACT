import { useCallback, useEffect } from "react";
import { Route, Switch } from "react-router";
import { useSelector, useDispatch } from 'react-redux'
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { ChatList } from "../../components/ChatList";
import { Messages } from "../../components/Message";
import { getChatList } from "../../store/chats/actions";
import { createChat, removeChat, setChats } from "../../store/chats/actions"
import { nanoid } from "nanoid";
import { CHATS } from "./Chats";
import { removeMessagesByChatId } from "../../store/messages/actions";

const useStyles = makeStyles({
	wrapper: {
		display: "grid",
		gridTemplateColumns: "200px 1fr"
	}
});

export const Chats = () => {
	const chats = useSelector(getChatList);
	const dispatch = useDispatch();
	const classes = useStyles();

	const onCreate = useCallback(() => {
		dispatch(createChat({
			id: nanoid,
			name: 'chatName'
		}))
	}, []);

	const onDelete = (chatId) => {
		dispatch(removeChat(chatId))
		dispatch(removeMessagesByChatId(chatId))
	}

	useEffect(() => {
		dispatch(setChats(CHATS))
	}, [])

	return (
		<div className={classes.wrapper}>
			<div>
				<ChatList onDelete={onDelete} list={CHATS} />
				<Button onClick={onCreate}>Create chat</Button>
			</div>

			<div>
				<Switch>
					<Route component={Messages} path="/chats/:chatid" />
				</Switch>
			</div>
		</div>
	);
};