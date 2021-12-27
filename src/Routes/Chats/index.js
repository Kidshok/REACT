import { Route, Switch } from "react-router";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { ChatList } from "../../components/ChatList";
import { Messages } from "../../components/Message";
import { withChats } from "../../hocs/withChats";
import { useSelector } from "react-redux";


const useStyles = makeStyles({
	wrapper: {
		display: "grid",
		gridTemplateColumns: "200px 1fr"
	}
});

export const ChatsRender = ({
	chats,
	onCreateChat,
	onDeleteChat,
}) => {

	const classes = useSelector();

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

export const Chats = withChats(ChatsRender);