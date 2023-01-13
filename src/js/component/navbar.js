import React from "react";
import { Link } from "react-router-dom";
import '../../styles/navbar.css'

export const Navbar = () => {
	return (

		<nav className="navbar navbar-expand-lg  navbarColor textoTamañoMediano ">
			<nav className="navbar ">
				<div className="container-fluid">
					<Link to="/">
						<i className="fa-solid fa-person-biking  navbarFontColor textoTamañoGrande"></i><a className="navbar-brand ps-2 navbarFontColor textoTamañoGrande" href="#">BIENESTAR</a>
					</Link>
				</div>
			</nav>
			<ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
				<li className="nav-item">
					<a className="nav-link active navbarFontColor" aria-current="page" href="#">Recetas</a>
				</li>

				<li className="nav-item">
					<Link to="/vistausuario">
						<a className="nav-link navbarFontColor" href="#">Mi Info</a>
					</Link>
				</li>
				<li className="nav-item">
					<a className="nav-link navbarFontColor" href="#">Deportes</a>
				</li>
				<li className="nav-item">
					<a className="nav-link navbarFontColor" href="#">Tu semana</a>
				</li>
				<li className="nav-item">
					<a className="nav-link navbarFontColor" href="#">Objetivos</a>
				</li>
			</ul>
			{/* login icon */}
			<li className="navbar-nav px-1">
				<i className="fa-regular fa-circle-user  navbarFontColor textoTamañoGrande"></i> 
				
			</li>

			<li className="navbar-nav pe-3 ps-1">
				<Link to="/login">
				<a className="nav-link  navbarFontColor" href="#">Login</a>
				</Link>
				<Link to="/signup">
				<a className="nav-link  navbarFontColor" href="#">Signup</a>
				</Link>
			</li>


			<li className="navbar-nav px-3">
				<i className="fa-solid fa-gear textoTamañoGrande"></i>
			</li>

			{/* <!-- Setting botton --> */}
			{/*<li className="nav-item dropdown pe-3 ps-3">
				<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">sssss</a>
				<ul className="dropdown-menu">
					<li>
						<a className="dropdown-item" href="#">Action</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">Another action</a>
					</li>
					<li>
						<hr className="dropdown-divider" />
					</li>
					<li>
						<a className="dropdown-item" href="#">Something else here</a>
					</li>
				</ul>
			</li>*/}
		</nav>
	);
};


