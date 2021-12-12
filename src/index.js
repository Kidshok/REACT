import { BrowserRouter, Switch, Router, Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";

import { Home } from "./Routes/Home";
import { Chats } from "./Routes/Chats";
import { Profile } from "./Routes/Profile";

export const App = () => {
	return (
		<div>
			<BrowserRouter>
				<AppBar position="static">
					<Toolbar>
						<Button to="/" component={Link} color="inherit">Home</Button>
						<Button to="/profile" component={Link} color="inherit"> Profile </Button>
						<Button to="/chats" component={Link} color="inherit"> Chats </Button>
					</Toolbar>
				</AppBar>
				<Switch>
					<Router component={Chats} path="/chats" />
					<Router component={Profile} path="/profile" />
					<Router component={Home} path="/" />
				</Switch>
			</BrowserRouter>
		</div>
	);
};