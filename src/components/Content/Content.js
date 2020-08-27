import React from "react";
import Row from "./Row";

import requests from "../../config/requests";

function Content() {
	return (
		<div>
			<Row
				title={"WORMOVIE ORIGINALS"}
				fetchUrl={requests.fetchOriginals}
			/>
			{/* <Row title={"Trending Now"} /> */}
			{/* <Row title={"Action Movies"} /> */}
			{/* <Row title={"Comedy Movies"} /> */}
			{/* <Row title={"Horror Movies"} /> */}
			{/* <Row title={"Romance Movies"} /> */}
			{/* <Row title={"Documentaries"} /> */}
		</div>
	);
}

export default Content;
