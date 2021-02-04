import React from "react";

export function Cards() {
	return (
		<div className="card">
			<img
				src="https://static.vix.com/es/sites/default/files/styles/thumbnail/public/imj/nuestrorumbo/L/Las-cuatro-ciudades-clave-de-Suiza.jpg"
				className="card-img-top"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}
