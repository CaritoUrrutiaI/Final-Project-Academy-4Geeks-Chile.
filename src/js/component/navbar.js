import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (

		<nav className="navbar navbar-expand-lg bg-light">
			<nav class="navbar bg-light">
				<div class="container-fluid">
					<a class="navbar-brand" href="#"><i class="fa-solid fa-person-biking"></i>Bienestar</a>
				</div>
			</nav>
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="#">Recetas</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Deportes</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Tu semana</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Objetivos</a>
					</li>
				</ul>
				{/* login icon */}
					<i class="fa-regular fa-circle-user"></i>

			{/* <!-- Setting botton --> */}
				<li class="nav-item dropdown">
					<a
						class="nav-link dropdown-toggle"
						href="#"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<i class="fa-solid fa-gear"></i>
					</a>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#">Action</a></li>
						<li><a class="dropdown-item" href="#">Another action</a></li>
						<li><hr class="dropdown-divider" /></li>
						<li>
							<a class="dropdown-item" href="#">Something else here</a>
						</li>
					</ul>
				</li>
			</nav>
	);
};
