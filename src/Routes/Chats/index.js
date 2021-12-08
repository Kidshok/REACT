import { Route, Switch } from "react-router";
import { makeStyles } from "@material-ui/core";
import { ChatList } from "../../components/ChatList";
import { Messages } from "../../components/Message";
import { CHATS } from "./Chats";

const useStyles = makeStyles({
	wrapper: {
		display: "grid",
		gridTemplateColumns: "200px 1fr"
	}
});

export const Chats = () => {
	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
			<ChatList list={CHATS} />
			<div>
				<Switch>
					<Route component={Messages} path="/chats/:chatid" />
				</Switch>
			</div>
		</div>
	);
};