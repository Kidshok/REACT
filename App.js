
import './App.css';


function Message(props) {
	return (
		<div className="message">
			<header className="message-header">
				My First React App
				<h3>Hello world! My name is {props.name}</h3>
			</header>
		</div>
	);
}

export default Message;
