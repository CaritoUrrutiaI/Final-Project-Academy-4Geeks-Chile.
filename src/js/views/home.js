import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		{/* SideBar */}
		<h1>Aquí va el saludo de bienvenida</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
		{/* <!-- Card para información  --> */}
		<div class="card-group">
			<div class="card">
				<img src="..." class="card-img-top" alt="..." />
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				</div>
			</div>
			<div class="card">
				<img src="..." class="card-img-top" alt="..." />
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
				</div>
			</div>
			<div class="card">
				<img src="..." class="card-img-top" alt="..." />
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
				</div>
			</div>
		</div>
	</div>
);
