import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="d-flex">
		<div id="sidebar-container">
			<div className="logo">
				<h3>Destacados</h3>
			</div>
			<div className="Noticias">
				<img src="..."/><p className= "img-fluid rounded-start d-block text-dark p-3">prueba prueba </p>
				<img src="..."/><p className= "d-block text-dark p-3">prueba prueba </p>
				<img src="..."/><p className= "d-block text-dark p-3">prueba prueba </p>
				<img src="..."/><p className= "d-block text-dark p-3">prueba prueba </p>
				<img src="..."/><p className= "d-block text-dark p-3">prueba prueba </p>
			</div>
		</div>
		<div className="bienvenida">
			<h1>Ingresa a tu portal Bienestar</h1>
			<button type="button" class="btn btn-success btn-lg">Inicia sesión <i class="fa-solid fa-circle-arrow-right"></i></button>
			<p><img src={rigoImage} /></p>
		</div>
		{/* Cards  */}
		<div class="card-group">
			<div class="card">
				<img src="..." class="card-img-top" alt="..." />
				<div class="card-body">
					<h5 class="card-title">1era Card title</h5>
					<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				</div>
			</div>
			<div class="card">
				<img src="..." class="card-img-top" alt="..." />
				<div class="card-body">
					<h5 class="card-title">2da Card title</h5>
					<p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
				</div>
			</div>
			<div class="card">
				<img src="..." class="card-img-top" alt="..." />
				<div class="card-body">
					<h5 class="card-title">3era Card title</h5>
					<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
				</div>
			</div>
		</div>
	</div>
);