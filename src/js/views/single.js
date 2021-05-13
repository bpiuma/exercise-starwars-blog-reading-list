import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const [personaje, setPersonaje] = useState({});

	fetch("https://www.swapi.tech/api/people/" + params.theid)
		.then(resp => resp.json())
		.then(data => setPersonaje(data.result.properties))
		.catch(error => console.log(error));

	return (
		<div className="bt-3 fondoPer">
			<div className="container mt-5">
				<div className="row">
					<div className="col-7">
						<img src={store.imgPersonajes[params.theid - 1]} className="imagenSingle" />
					</div>
					<div className="col-5 text-light">
						<h1 className="text-center mb-3">{personaje.name}</h1>
						<p className="text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies nisi metus, non
							mattis mi faucibus nec. Ut cursus dui magna, sed sagittis lorem convallis in. Nulla
							ultrices, erat eget mollis consectetur, dui magna vehicula orci, at tincidunt dolor tortor
							eget odio. Vestibulum blandit ligula in aliquet posuere. Praesent vitae massa non lectus
							cursus ornare id ac nisi. Maecenas eget elit et nisl aliquam vulputate.
							<br /> <br /> Duis commodo et metus sit amet congue. Vestibulum nec nisi eget risus lacinia
							faucibus vitae a neque. Nam ante leo, fermentum et ornare vitae, lacinia a ex. Nulla
							facilisi. Proin non lacinia odio, egestas scelerisque risus. Nullam et nisi et ex congue
							ullamcorper non id eros. Sed scelerisque eu quam sed convallis. Sed blandit facilisis ligula
							non bibendum. Etiam fringilla est id ullamcorper aliquet. Duis rhoncus lacus sit amet ligula
							lobortis, vel venenatis ligula dictum.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-12 border-bottom border-danger mt-4 mb-4" />
				</div>
				<div className="row">
					<div className="col-2 text-center text-danger">
						<p className="font-weight-bold">Name</p>
						<p className="font-italic">{personaje.name}</p>
					</div>
					<div className="col-2 text-center text-danger">
						<p className="font-weight-bold">Birth Year</p>
						<p className="font-italic">{personaje.birth_year}</p>
					</div>
					<div className="col-2 text-center text-danger">
						<p className="font-weight-bold">Gender</p>
						<p className="font-italic">{personaje.gender}</p>
					</div>
					<div className="col-2 text-center text-danger">
						<p className="font-weight-bold">Height</p>
						<p className="font-italic">{personaje.height}</p>
					</div>
					<div className="col-2 text-center text-danger">
						<p className="font-weight-bold">Skin Color</p>
						<p className="font-italic">{personaje.skin_color}</p>
					</div>
					<div className="col-2 text-center text-danger">
						<p className="font-weight-bold">Eye Color</p>
						<p className="font-italic">{personaje.eye_color}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
