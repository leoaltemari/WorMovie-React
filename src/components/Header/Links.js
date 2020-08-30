import React, { useEffect, useState } from "react";
import "../../assets/css/Header/Links.css";

const links = ["Início", "Séries", "Filmes", "Mais Recentes", "Minha Lista"];
function Links() {
	let [dropDown, setDropDown] = useState(false);
	const dropDownMenu = (
		<div className="dropdown">
			<div className="dropdown__line"></div>
			<div className="dropdown__line"></div>
			<div className="dropdown__line"></div>
		</div>
	);

	useEffect(() => {
		window.addEventListener("resize", () => {
			const windowWidth = window.innerWidth;
			windowWidth < 980 ? setDropDown(true) : setDropDown(false);
			console.log(dropDown);
		});
	}, []);

	return (
		<div className="header__links">
			{!dropDown &&
				links.map(link => {
					return (
						<div className="header__link" key={link}>
							{link}
						</div>
					);
				})}
			{dropDown && dropDownMenu}
		</div>
	);
}

export default Links;
