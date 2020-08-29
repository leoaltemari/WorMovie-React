import React from "react";
import "../../assets/css/Header/User.css";

function User() {
	return (
		<div className="user__content">
			<img
				src={require("../../assets/images/user_icon.png")}
				alt="user_icon"
				className="user__icon"
			/>
			<img
				src={require("../../assets/images/arrow_down_icon.png")}
				alt="arrow_down_icon"
				className="user__arrow__down"
			/>
		</div>
	);
}

export default User;
