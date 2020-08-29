import React from "react";
import "../../assets/css/Header/Links.css";

const links = ["Início", "Séries", "Filmes", "Mais Recentes", "Minha Lista"];
function Links() {
	return (
		<div className="header__links">
			{links.map(link => {
				return (
					<div className="header__link" key={link}>
						{link}
					</div>
				);
			})}
		</div>
	);
}

export default Links;
