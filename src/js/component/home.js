import React from "react";

import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";
import { Footer } from "./footer";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="row">
				<div className="col-3">
					<Cards />
				</div>

				<div className="col-3">
					<Cards />
				</div>

				<div className="col-3">
					<Cards />
				</div>

				<div className="col-3">
					<Cards />
				</div>
			</div>
			<Footer />
		</div>
	);
}
