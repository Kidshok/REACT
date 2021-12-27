import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { Home } from "./Routes/Home";
import { Chats } from "./Routes/Chats";
import { Profile } from "./Routes/Profile";
import { store, persistor } from "./store";

export const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<AppBar position="static">
						<Toolbar>
							<Button to="/" component={Link} color="inherit">
								Home
							</Button>
							<Buttom to="/profile" component={Link} color="inherit">
								Profile
							</Buttom>
							<Buttom to="/chats" component={Link} color="inherit">
								Chats
							</Buttom>
						</Toolbar>
					</AppBar>
					<Switch>
						<Route component={Chats} path="/chats" />
						<Route component={Profile} path="/profile" />
						<Route component={Home} path="/" />
					</Switch>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
};