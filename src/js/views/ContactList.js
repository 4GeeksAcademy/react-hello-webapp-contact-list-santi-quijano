import React, { useContext, useEffect, useState } from "react";
import "../../styles/ContactList.css";
import { ContactCard } from "../component/ContactCard";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const ContactList = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getContacts();
	}, [actions]);

	return (

		<div className="contact-list mt-4">
			<div className="">
				<div className="text-center">
					<Link to="/post-contact">
						<button type="button" className="btn btn-primary mb-5 fixed-button">Add New Contact</button>
					</Link>
				</div>
				<h2 className="text-center mb-4">Contacts</h2>

				{store.contacts.map((contact) => (

					<ContactCard key={contact.id} contact={contact} />
				))}

			</div>
		</div>
	)
};

export default ContactList;
