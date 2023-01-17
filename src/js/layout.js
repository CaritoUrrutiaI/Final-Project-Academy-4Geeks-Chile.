import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Login } from "./views/login";
import { SignUp } from "./views/signup";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { VistaUsuario } from "./views/vistausuario";
import { Recetas } from "./views/recetas";
import { TuSemana } from "./views/tusemana";
import { RecuperarContrasena } from "./views/recuperarcontrasena";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/tusemana" element={<TuSemana/>} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<SignUp/>}/>
						<Route path="/recetas" element={<Recetas/>}/>
						<Route path="/recuperarcontrasena" element={<RecuperarContrasena/>}/>
						<Route path="*" element={<h1>Not found!</h1>} />
						<Route path="/vistausuario" element={<VistaUsuario/>}/>
						
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
