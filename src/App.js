import Cards from './components/Cards'
import React from 'react'
import horitzontal from './assets/img/horitzontal.png'
import cel123 from './assets/img/cel123.png'
import KevPrinci from './components/KevPrinci'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./Routes";
import CarritoContextProvider from "./context/carritoContext";
import Caracts from './components/Caracts'
import  {AuthContextProvider} from './context/authContext'
import { Navbar } from 'react-bootstrap'
import { AuthReactProvider } from './context/reactAuthContext'


export default function App() {

	return (
		<Router>
			<AuthReactProvider>
				<AuthContextProvider>		
					<CarritoContextProvider>
						<Navbar/>
						<Switch>
							<Routes />
						</Switch>
					</CarritoContextProvider>
				</AuthContextProvider>
			</AuthReactProvider>
		</Router>
	);
}