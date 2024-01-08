import React, { useContext, useEffect, useState } from "react";
import "../../styles/ContactList.css";
import { ContactCard } from "../component/ContactCard";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const ContactList = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getContacts();
	}, []);

	return (

		<div className="mt-4">
			{store.contacts.map((contact) => (

				<ContactCard key={contact.id} contact={contact}/>
			))}
			<Link to="/post-contact">
				<button type="button" className="btn btn-primary">
					Add New Contact
				</button>
			</Link>
		</div>
	)
};

export default ContactList;
