import React, { useState, useEffect } from "react";
import "../../assets/css/Row.css";

import axios from "../../config/axios";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function getMovies() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		getMovies();
	}, [fetchUrl]);

	return (
		<div>
			<h1 className="title">{title}</h1>
			<div id="posters" className="row__posters">
				{movies.map(movie => {
					return (
						<img
							className="row__poster"
							key={movie.id}
							src={`${base_url}${movie.poster_path}`}
							alt={movie.name}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Row;
