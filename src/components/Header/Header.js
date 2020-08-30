import React, { useEffect } from "react";
import Links from "./Links";
import Search from "./Search";
import User from "./User";
import "../../assets/css/Header/Header.css";

function Header() {
	useEffect(() => {
		window.addEventListener("scroll", () => {
			const header = document.querySelector(".header__content");
			if (window.scrollY > 100) {
				header.classList.add("header__black");
			} else {
				header.classList.remove("header__black");
			}
		});
	}, []);

	return (
		<header className="header__content">
			<img
				src={require("../../assets/images/wormovie_logo.svg")}
				alt="header_logo"
				className="header__logo"
			/>
			<Links />
			<div className="float__right">
				<Search />
				<User />
			</div>
		</header>
	);
}

export default Header;
