import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Swal from 'sweetalert2'

export const Home = () => (
	<div className="container-fluid">
		<div className="row g-0">
			<div id="sidebar-container" className="col-3">
				<ul class="list-group">
					<h3>Noticias Destacadas</h3>
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
						<a href="https://efesalud.com/la-actividad-fisica-decisiva-para-el-equilibrio-mental-y-el-bienestar/" target="_blank" class="list-group-item list-group-item-action">Deporte y salud: la actividad física, decisiva para el equilibrio mental y el bienestar</a>
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
			{/* carrousel Imagenes de deportes */}
			<div className="bienvenida col-9">
				<div className="carrousel">
					<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
						<div class="carousel-inner">
							<div class="carousel-item active">
								<img src="https://nswc.b-cdn.net/wp-content/uploads/2017/01/aquatics-25m-swimming-pool-1200x800.jpg" class="d-block w-100" alt="swimming" />
							</div>
							<div class="carousel-item">
								<img src="https://bike-test.com/wp-content/uploads/temp/DGG56947.jpg" class="d-block w-100" alt="bikes" />
							</div>
							<div class="carousel-item">
								<img src="https://heremag-prod-app-deps-s3heremagassets-bfie27mzpk03.s3.amazonaws.com/wp-content/uploads/2020/07/15140311/holly-mandarich-Y90GKsTKxBM-unsplash-1200x800.jpg" class="d-block w-100" alt="hiking" />
							</div>
							<div class="carousel-item">
								<img src="https://www.runtastic.com/blog/wp-content/uploads/2021/05/thumbnail_1200x800-2.jpg" class="d-block w-100" alt="running" />
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
				</div>
				<div className="linea-azul-carrosel"></div>
				{/* Cards  */}
				<div class="card-group row g-0">
					<div class="card">
						<img src="https://shilaansogain.com/wp-content/uploads/2019/10/nutricion-alimentacion-deportiva-pamplona.jpg" class="card-img-top" alt="figura de bicicleta formada sólo de frutas y verduras" />
						<div class="card-body">
							<h4 class="card-title"><b> ALIMENTACIÓN Y RENDIMIENTO DEPORTIVO </b></h4>
							<h5> Te has preguntando alguna vez ¿Cómo influye la alimentación en el rendimiento de un deportista?</h5>
							<h6 class="card-text">Mediante una correcta alimentación mejorará significativamente el rendimiento y la recuperación. Un entrenamiento acompañado de una nutrición adecuada podrá alcanzar mayores intensidades de trabajo y duración del mismo, de la misma manera que en periodos de descanso se debe adaptar la nutrición y así favorecer la supercompensación y adaptación al deporte.</h6>
							<a href="https://www.ergodinamica.com/blog/la-importancia-de-la-nutricion-aplicada-al-deporte/" target="_blank" class="btn btn-success">Leer más información...</a>
						</div>
					</div>
					<div class="card">
						<img src="https://shilaansogain.com/wp-content/uploads/2019/10/nutricion-alimentacion-deportiva-pamplona.jpg" class="card-img-top" alt="figura de bicicleta formada sólo de frutas y verduras" />
						<div class="card-body">
							<h4 class="card-title"><b> ALIMENTACIÓN Y RENDIMIENTO DEPORTIVO </b></h4>
							<h5> Te has preguntando alguna vez ¿Cómo influye la alimentación en el rendimiento de un deportista?</h5>
							<h6 class="card-text">Mediante una correcta alimentación mejorará significativamente el rendimiento y la recuperación. Un entrenamiento acompañado de una nutrición adecuada podrá alcanzar mayores intensidades de trabajo y duración del mismo, de la misma manera que en periodos de descanso se debe adaptar la nutrición y así favorecer la supercompensación y adaptación al deporte.</h6>
							<a href="https://www.ergodinamica.com/blog/la-importancia-de-la-nutricion-aplicada-al-deporte/" target="_blank" class="btn btn-success">Leer más información...</a>
						</div>
					</div>
					<div class="card">
						<img src="https://shilaansogain.com/wp-content/uploads/2019/10/nutricion-alimentacion-deportiva-pamplona.jpg" class="card-img-top" alt="figura de bicicleta formada sólo de frutas y verduras" />
						<div class="card-body">
							<h4 class="card-title"><b> ALIMENTACIÓN Y RENDIMIENTO DEPORTIVO </b></h4>
							<h5> Te has preguntando alguna vez ¿Cómo influye la alimentación en el rendimiento de un deportista?</h5>
							<h6 class="card-text">Mediante una correcta alimentación mejorará significativamente el rendimiento y la recuperación. Un entrenamiento acompañado de una nutrición adecuada podrá alcanzar mayores intensidades de trabajo y duración del mismo, de la misma manera que en periodos de descanso se debe adaptar la nutrición y así favorecer la supercompensación y adaptación al deporte.</h6>
							<a href="https://www.ergodinamica.com/blog/la-importancia-de-la-nutricion-aplicada-al-deporte/" target="_blank" class="btn btn-success">Leer más información...</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);