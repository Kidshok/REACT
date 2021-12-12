import propTypes from "prop-types";
import { List } from "@material-ui/core";

import { Message } from "./Message";

export const MessageList = (props) => {
	return (
		<List>
			{props.messgaeList.map((item) => (
				<Message key={item.id} {...item} />
			))}
		</List>
	);
};

MessageList.propTypes = {
	messgaeList: propTypes.arrayOf(
		propTypes.shape({
			id: propTypes.srting,
			text: propTypes.string,
			autjor: propTypes.string
		})
	)
};

MessageList.defaultProps = {
	MessageList: []
};