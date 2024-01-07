import React, { useContext } from "react";
import "../../styles/ContactList.css";
import { ContactCard } from "../component/ContactCard";
import { Context } from "../store/appContext";

const ContactList = () => {
	const { store } = useContext(Context);
	<div className="text-center mt-5">
		{store.agenda.map(contact=>( <ContactCard key={contact.id} contact={contact}/>
		))}
	</div>
};

export default ContactList;
