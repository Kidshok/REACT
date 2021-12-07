import { IconButton, InputBase } from "@material-ui/core";
import propTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import { useState, useEffect, useRef } from "react";
import { Paper, Send } from "@material-ui/core";


const useStyles = makeStyles((them) => ({
	paper: {
		display: "flex",
		justifyContent: "space-between",
		alignitems: "center",
		paddingLeft: them.spacing(1)
	},
	input: {
		flexGrow: 1
	}
}));

export const MessageInput = (props) => {
	const classes = useStyles();
	const [value, setValue] = useState("");

	const inputRef = useRef(null);

	const resetForm = () => {
		setValue("");
	};

	const onSubmitMessage = (event) => {
		event.preventDefault();
		props.onSend(value);
		resetForm();
	};

	const onChangeMessageInput = (event) => {
		setValue(event.target.value);
	};


	useEffect(() => {
		inputRef.current.focus();
	});

	return (
		<Paper
			className={classes.paper}
			component="form"
			onSubmit={onSubmitMessage}>
			<InputBase
				inputRef={inputRef}
				className={classes.input}
				inChang={onChangeMessageInput}
				placeholder={props.placeholder}
				value={value}
				type="text"
			/>
			<IconButton type="submit">
				<Send />
			</IconButton>
		</Paper>
	);
};

MessageInput.propTypes = {
	onSend: propTypes.func,
	placeholder: propTypes.string
};