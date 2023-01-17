import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Swal from 'sweetalert2'

export const Home = () => (
	<div className="container-fluid">
		<div className="row">
			<div id="sidebar-container" className="col-3">
				<div className="logo">
					<h3>Noticias Destacadas</h3>
				</div>
				<ul class="list-group">
					<li class="list-group-item">
						<img src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" className="card-img-top rounded-circle" alt="Imagen Perfil" />
						<a href="https://www.elmostrador.cl/generacion-m/2022/04/04/mas-del-40-de-los-chilenos-no-practica-deportes-por-falta-de-tiempo/" target="_blank" class="list-group-item list-group-item-action">Más del 40% de los chilenos no practica deportes por falta de tiempo</a>
					</li>
					<li class="list-group-item">
						<img src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" className="card-img-top rounded-circle" alt="Imagen Perfil" />
						<a href="https://www.meds.cl/los-beneficios-del-deporte-los-ninos/" target="_blank" class="list-group-item list-group-item-action">Los beneficios del Deporte en los niños</a>
					</li>
					<li class="list-group-item">
						<img src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" className="card-img-top rounded-circle" alt="Imagen Perfil" />
						<a href="https://www.meds.cl/los-beneficios-del-deporte-los-ninos/" target="_blank" class="list-group-item list-group-item-action">Los beneficios del Deporte en los niños</a>
					</li>
					<li class="list-group-item">
						<img src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" className="card-img-top rounded-circle" alt="Imagen Perfil" />
						<a href="https://www.elmostrador.cl/generacion-m/2022/04/04/mas-del-40-de-los-chilenos-no-practica-deportes-por-falta-de-tiempo/" target="_blank" class="list-group-item list-group-item-action">Más del 40% de los chilenos no practica deportes por falta de tiempo</a>
					</li>
					<li class="list-group-item">
						<img src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" className="card-img-top rounded-circle" alt="Imagen Perfil" />
						<a href="https://www.meds.cl/los-beneficios-del-deporte-los-ninos/" target="_blank" class="list-group-item list-group-item-action">Los beneficios del Deporte en los niños</a>
					</li>
					<li class="list-group-item">
						<img src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" className="card-img-top rounded-circle" alt="Imagen Perfil" />
						<a href="https://www.meds.cl/los-beneficios-del-deporte-los-ninos/" target="_blank" class="list-group-item list-group-item-action">Los beneficios del Deporte en los niños</a>
					</li>
					<li class="list-group-item">
						<img src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" className="card-img-top rounded-circle" alt="Imagen Perfil" />
						<a href="https://www.elmostrador.cl/generacion-m/2022/04/04/mas-del-40-de-los-chilenos-no-practica-deportes-por-falta-de-tiempo/" target="_blank" class="list-group-item list-group-item-action">Más del 40% de los chilenos no practica deportes por falta de tiempo</a>
					</li>
					<li class="list-group-item">
						<img src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" className="card-img-top rounded-circle" alt="Imagen Perfil" />
						<a href="https://www.meds.cl/los-beneficios-del-deporte-los-ninos/" target="_blank" class="list-group-item list-group-item-action">Los beneficios del Deporte en los niños</a>
					</li>
					<li class="list-group-item">
						<img src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" className="card-img-top rounded-circle" alt="Imagen Perfil" />
						<a href="https://www.meds.cl/los-beneficios-del-deporte-los-ninos/" target="_blank" class="list-group-item list-group-item-action">Los beneficios del Deporte en los niños</a>
					</li>
					<li class="list-group-item">
						<img src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" className="card-img-top rounded-circle" alt="Imagen Perfil" />
						<a href="https://www.elmostrador.cl/generacion-m/2022/04/04/mas-del-40-de-los-chilenos-no-practica-deportes-por-falta-de-tiempo/" target="_blank" class="list-group-item list-group-item-action">Más del 40% de los chilenos no practica deportes por falta de tiempo</a>
					</li>
					<li class="list-group-item">
						<img src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" className="card-img-top rounded-circle" alt="Imagen Perfil" />
						<a href="https://www.meds.cl/los-beneficios-del-deporte-los-ninos/" target="_blank" class="list-group-item list-group-item-action">Los beneficios del Deporte en los niños</a>
					</li>
					<li class="list-group-item">
						<img src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" className="card-img-top rounded-circle" alt="Imagen Perfil" />
						<a href="https://www.meds.cl/los-beneficios-del-deporte-los-ninos/" target="_blank" class="list-group-item list-group-item-action">Los beneficios del Deporte en los niños</a>
					</li>
				</ul>
			</div>
			<div className="bienvenida col-9">
				<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img src="https://img.freepik.com/fotos-premium/fondo-bienestar_120872-136.jpg?w=2000" class="d-block w-100" alt="..." />
						</div>
						<div class="carousel-item">
							<img src="https://img.freepik.com/fotos-premium/fondo-bienestar_120872-2718.jpg" class="d-block w-100" alt="..." />
						</div>
						<div class="carousel-item">
							<img src="https://img.freepik.com/fotos-premium/spa-zen-piedras-basalto-hojas-bambu-verde-masaje-relajacion-bienestar_68060-170.jpg" class="d-block w-100" alt="..." />
						</div>
					</div>
					<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</button>
					<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</button>
				</div>
				{/* Cards  */}
				<div class="card-group row">
					<div class="card">
						<img src="https://shilaansogain.com/wp-content/uploads/2019/10/nutricion-alimentacion-deportiva-pamplona.jpg" class="card-img-top" alt="figura de bicicleta formada sólo de frutas y verduras" />
						<div class="card-body">
							<h4 class="card-title"><b> ALIMENTACIÓN Y RENDIMIENTO DEPORTIVO </b></h4>
							<h5> Te has preguntando alguna vez ¿Cómo influye la alimentación en el rendimiento de un deportista?</h5>
							<p class="card-text">Mediante una correcta alimentación mejorará significativamente el rendimiento y la recuperación. Un entrenamiento acompañado de una nutrición adecuada podrá alcanzar mayores intensidades de trabajo y duración del mismo, de la misma manera que en periodos de descanso se debe adaptar la nutrición y así favorecer la supercompensación y adaptación al deporte. Siempre digo que con la nutrición deportiva no se crean «supercampeones», pero sí puede haber campeones que nunca lleguen a serlo porque no se alimentan e hidratan correctamente.</p>
							<a href="https://www.ergodinamica.com/blog/la-importancia-de-la-nutricion-aplicada-al-deporte/" target="_blank" class="btn btn-success">Leer más información...</a>
						</div>
					</div>
					<div class="card">
						<img src="https://shilaansogain.com/wp-content/uploads/2019/10/nutricion-alimentacion-deportiva-pamplona.jpg" class="card-img-top" alt="figura de bicicleta formada sólo de frutas y verduras" />
						<div class="card-body">
							<h4 class="card-title"><b>LA RELACIÓN DE CORRECTA ALIMENTACIÓN CON EL RENDIMIENTO DEPORTIVO </b></h4>
							<h5> Te has preguntando alguna vez ¿Cómo influye la alimentación en el rendimiento de un deportista?</h5>
							<p class="card-text">Mediante una correcta alimentación mejorará significativamente el rendimiento y la recuperación. Un entrenamiento acompañado de una nutrición adecuada podrá alcanzar mayores intensidades de trabajo y duración del mismo, de la misma manera que en periodos de descanso se debe adaptar la nutrición y así favorecer la supercompensación y adaptación al deporte. Siempre digo que con la nutrición deportiva no se crean «supercampeones», pero sí puede haber campeones que nunca lleguen a serlo porque no se alimentan e hidratan correctamente.</p>
							<a href="https://www.ergodinamica.com/blog/la-importancia-de-la-nutricion-aplicada-al-deporte/" target="_blank" class="btn btn-success">Leer más información...</a>
						</div>
					</div>
					<div class="card">
						<img src="https://shilaansogain.com/wp-content/uploads/2019/10/nutricion-alimentacion-deportiva-pamplona.jpg" class="card-img-top" alt="figura de bicicleta formada sólo de frutas y verduras" />
						<div class="card-body">
							<h4 class="card-title"><b>LA RELACIÓN DE CORRECTA ALIMENTACIÓN CON EL RENDIMIENTO DEPORTIVO </b></h4>
							<h5> Te has preguntando alguna vez ¿Cómo influye la alimentación en el rendimiento de un deportista?</h5>
							<p class="card-text">Mediante una correcta alimentación mejorará significativamente el rendimiento y la recuperación. Un entrenamiento acompañado de una nutrición adecuada podrá alcanzar mayores intensidades de trabajo y duración del mismo, de la misma manera que en periodos de descanso se debe adaptar la nutrición y así favorecer la supercompensación y adaptación al deporte. Siempre digo que con la nutrición deportiva no se crean «supercampeones», pero sí puede haber campeones que nunca lleguen a serlo porque no se alimentan e hidratan correctamente.</p>
							<a href="https://www.ergodinamica.com/blog/la-importancia-de-la-nutricion-aplicada-al-deporte/" target="_blank" class="btn btn-success">Leer más información...</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);