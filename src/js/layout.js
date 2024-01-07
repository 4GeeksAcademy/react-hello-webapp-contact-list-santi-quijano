import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import ContactList  from "./views/ContactList";
import  PostContact  from "./views/PostContact";
import  PutContact  from "./views/PutContact";

import injectContext from "./store/appContext";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<ContactList />} />
						<Route path="/post-contact" element={<PostContact />} />
						<Route path="/put-contact" element={<PutContact />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
