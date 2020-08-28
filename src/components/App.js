import React from "react";
import "../assets/css/App.css";
import Content from "./Content/Content";
import Header from "./Header/Header";
import Poster from "./Poster/Poster";

function App() {
	return (
		<div className="App">
			<Header />
			<Poster />
			<Content />
		</div>
	);
}

export default App;
