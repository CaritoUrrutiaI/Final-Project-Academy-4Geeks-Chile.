import React from "react";

import "../../styles/footer.css"

export const Footer = () => (
	<div>
		<div className="linea-azul-footer"></div>
		<footer className="footer mt-auto py-3 text-center footerColor fixed-bottom">
			<div className="RR.SS pb-1">
				<i className="fa-regular fa-envelope textoTamañoGrande mx-2"></i>
				<i className="fa-brands fa-instagram textoTamañoGrande mx-2"></i>
				<i className="fa-brands fa-facebook textoTamañoGrande mx-2"></i>
				<i className="fa-brands fa-linkedin textoTamañoGrande mx-2"></i>
			</div>
			<p className="p-0 m-0">
				<i className="fa-regular fa-copyright" />  Todos los derechos reservados by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
			</p>
		</footer>
	</div>
);
