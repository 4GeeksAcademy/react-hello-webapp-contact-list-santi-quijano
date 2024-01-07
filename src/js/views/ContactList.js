import React, { useContext } from "react";
import "../../styles/ContactList.css";
import { ContactCard } from "../component/ContactCard";


const ContactList = () => (
	<div className="mt-4">
		<ContactCard />
	</div>
);

export default ContactList;
