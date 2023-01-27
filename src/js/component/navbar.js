import React, { useContext,useState} from "react";
import { Link } from "react-router-dom";
import '../../styles/navbar.css'
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {actions,store}=useContext(Context)
	const [datauser,setDataUser] = useState(JSON.parse(localStorage.getItem("datauser") ))

	return (
		<div>
			<nav className="navbar navbar-expand-lg  navbarColor textoTamañoMediano px-0 ">
				<nav className="navbar ps-3">
					<div className="container-fluid">
						<Link to="/" className="text-decoration-none">
							<i className="fa-solid fa-person-biking  navbarFontColor textoTamañoGrande"></i><a className="navbar-brand ps-2 navbarFontColor textoTamañoGrande" href="#">BIENESTAR</a>
						</Link>
					</div>
				</nav>
				<ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
					<li className="nav-item">
						<Link to="/recetas" className="text-decoration-none">
							<a className="nav-link active navbarFontColor" aria-current="page" href="#">Recetas</a>
						</Link>
					</li>
					<li className="nav-item">
					<Link to="/entrenamiento" className="text-decoration-none">
						<a className="nav-link navbarFontColor" href="#">Deportes</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/tusemana" className="text-decoration-none">
							<a className="nav-link navbarFontColor" href="#">Tu semana</a>
						</Link>
					</li>
				</ul>
				{/* login icon */}
				<li className="navbar-nav px-1">
					<Link to="/vistausuario" className="text-decoration-none">
						<i className="fa-regular fa-circle-user  navbarFontColor textoTamañoGrande"></i>
					</Link>
				</li>


				<li className="navbar-nav pe-3 ps-1">
					<Link to="/login" className="text-decoration-none">
						<a className="nav-link  navbarFontColor" href="#">Login{datauser?.info_user.email}</a>
					</Link>
					<Link to="/signup" className="text-decoration-none">
						<a className="nav-link  navbarFontColor" href="#">Signup</a>
					</Link>
				</li>
				{/* logout icon */}

				<li className="navbar-nav px-3" onClick={()=>{
					setDataUser (localStorage.removeItem("datauser"))
				}
				}>
					<Link to="/logout" className="text-decoration-none">

						<i className="fa-solid fa-arrow-right-from-bracket tamañotextoGrande"></i>
					</Link>
				</li>
			</nav>
			<div className="linea-azul-navbar"></div>
		</div>
	);
};


