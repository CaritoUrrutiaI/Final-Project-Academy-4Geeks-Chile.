import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Login } from "./views/login";
import { SignUp } from "./views/signup";
import { NotFound} from "./views/notfound";
import injectContext from "./store/appContext";

import ProtectedRoute from "./component/protectedRoute";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { VistaUsuario } from "./views/vistausuario";
import { Recetas } from "./views/recetas";
import { TuSemana } from "./views/tusemana";
import { RecuperarContrasena } from "./views/recuperarcontrasena";
import { Entrenamiento } from "./views/entrenamientos";
import { RegistrarActividad } from "./views/registroActividad";


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
						<Route path='/tusemana' element={
							<ProtectedRoute>
								<TuSemana />
							</ProtectedRoute>
						} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<SignUp />}/>
						<Route path="/recetas" element={<Recetas/>}/>
						<Route path="/recuperarcontrasena" element={<RecuperarContrasena/>}/>
						<Route path='/vistausuario' element={
							<ProtectedRoute>
								<VistaUsuario />
							</ProtectedRoute>
						} />
						<Route path="/entrenamiento" element={<Entrenamiento/>}/>
						<Route path="/registroActividad/:actividad" element={<RegistrarActividad/>}/>
						<Route path="*" element={<NotFound />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
