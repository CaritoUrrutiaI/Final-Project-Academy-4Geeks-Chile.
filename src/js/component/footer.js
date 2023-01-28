import React from "react";
import { Link } from "react-router-dom"
import "../../styles/footer.css"

export const Footer = () => (
	<div className="fixed-botton container-fluid">
		<div className="linea-azul-footer"></div>
		<footer className="py-3 text-center footerColor ">
			<div className="RR.SS pb-1">
				<a href="https://www.gmail.com" >
					<i class="fa-regular fa-envelope textoTamañoGrande" alt="Correo"></i>
				</a>
				<a href="https://facebook.com" >
					<i class="fa-brands fa-facebook textoTamañoGrande" alt="Facebook"></i>
				</a>
				<a href="https://linkeminn.com" >
					<i class="fa-brands fa-linkedin textoTamañoGrande" alt="Linkedin"></i>
				</a>
				<a href="https://instagram.com" >
					<i class="fa-brands fa-instagram textoTamañoGrande" alt="Instagram"></i>
				</a>
				<a href="https://twitter.com" >
					<i class="fa-brands fa-twitter textoTamañoGrande" alt="Twitter"></i>
				</a>
			</div>
			<p className="p-0 m-0">
				<i className="fa-regular fa-copyright" />  Todos los derechos reservados by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
			</p>
		</footer>
	</div>
);
