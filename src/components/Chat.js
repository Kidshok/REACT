import { ListItem, ListItemText } from "@material-ui/core";
import { PropTypes } from "prop-types";

export const Chat = ({ name }) => {
	return (
		<ListItem>
			<ListItemText>{name}</ListItemText>
		</ListItem>
	);
};

Chat.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string
};