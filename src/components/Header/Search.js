import React from "react";
import "../../assets/css/Header/Search.css";

function Search() {
	function showSearchBox(event) {
		const searchContent = document.querySelector(".search__content");
		const searchBox = document.querySelector(".search__box");

		searchContent.classList.remove("search__content__hidden");
		searchBox.classList.remove("search__box__hidden");
	}

	function hideSearchBox(event) {
		const searchContent = document.querySelector(".search__content");
		const searchBox = document.querySelector(".search__box");

		searchContent.classList.add("search__content__hidden");
		searchBox.classList.add("search__box__hidden");
	}

	return (
		<div
			className="search__content search__content__hidden"
			onMouseLeave={hideSearchBox}
		>
			<img
				src={require("../../assets/images/search_icon.ico")}
				alt=""
				className="search__icon"
				onClick={showSearchBox}
			/>
			<input
				type="text"
				className="search__box search__box__hidden"
				placeholder="Títulos, gente e generos"
			/>
		</div>
	);
}

export default Search;
