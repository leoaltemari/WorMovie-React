import React, { useEffect, useState } from "react";
import axios from "../../config/axios";
import request from "../../config/requests";

import "../../assets/css/Poster.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Poster() {
	const [movie, setMovie] = useState([]);

	function truncateString(_description, n) {
		return _description?.length > n
			? _description.substr(0, n - 1) + "..."
			: _description;
	}

	useEffect(() => {
		async function getMovies() {
			const fetchData = await axios.get(request.fetchTopRated);
			const rand = parseInt(
				Math.random() * fetchData.data.results.length
			);
			setMovie(fetchData.data.results[rand]);
			return request;
		}
		getMovies();
	}, []);

	return (
		<header
			className="poster__bkg"
			style={{
				backgroundImage: `url(${base_url}${movie.backdrop_path})`,
			}}
		>
			<div className="poster__content">
				<h1 className="poster__title">{movie.title}</h1>
				<h3>{truncateString(movie.overview, 200)}</h3>
				{console.log(movie)}
				<div className="poster__buttons">
					<button className="poster__button poster__play">
						<img
							src={require("../../assets/images/play_icon.png")}
							alt="play_icon"
							className="poster__button__icon"
						/>
						Play
					</button>
					<button className="poster__button poster__info">
						<img
							src={require("../../assets/images/info_icon.png")}
							alt="info_icon"
							className="poster__button__icon"
						/>
						More Information
					</button>
				</div>
			</div>
			<div className="smooth__effect"></div>
		</header>
	);
}

export default Poster;
