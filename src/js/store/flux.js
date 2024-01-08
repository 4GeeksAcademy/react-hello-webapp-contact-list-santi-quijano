const getState = ({ getStore, getActions, setStore }) => {
	const apiUrl = "https://playground.4geeks.com/apis/fake/contact/";
	return {
		store: {
			contact: [],
			contacts: [],
		},
		actions: {
			getContacts: async () => {
				const store = getStore();
				try {
					const response = await fetch(apiUrl + "agenda/my_own_agenda", {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					});
					if (response.ok) {
						const body = await response.json();
						setStore({ contacts: body });
						return;
					}
				} catch (error) {
					console.log(error);
				}
			},
			postContact: async (full_name, address, phone, email) => {
				try {
					const response = await fetch(apiUrl, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							full_name: full_name,
							address: address,
							phone: phone,
							email: email,
							agenda_slug: "my_own_agenda"
						}),
					});
					if (response.ok) {
						const actions = getActions();
						actions.getContacts();
						return await response.json();
					} else {
						console.log("That contact already exists, try again.");
					}
				} catch (error) {
					console.log("Error Posting, check your request and try again:", error);
				}
			},


			deleteContact: async (contact_id) => {
				try {
					const response = await fetch(url + `${contact_id}`, {
						method: "DELETE",
						headers: { "Content-Type": "application/json" }
					});
					if (response.ok) {
						const actions = getActions();
						actions.getContacts()
						console.log("Contact successfully deleted!");
					} else {
						console.error("There was an error while deleting a contact, try again:", response.status);
					}
				} catch (error) {
					console.error("There was a error in the request, try again:", error)

				}
			},
			getContact: async (contact_id) => {
				try {
					const response = await fetch(apiUrl + `${contact_id}`, {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					});
					if (response.ok) {
						const actions = getActions();
						const body = await response.json();
						setStore({ contact: body })
						return body
					}
				} catch (error) {
					console.log(error)
				}
			},
			putContact: async (full_name, address, email, phone, contact_id) => {
				try {
					const response = await fetch(apiUrl + `${contact_id}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							full_name: full_name,
							address: address,
							phone: phone,
							email: email,
							agenda_slug: "my_own_agenda"
						}),
					});
					if (response.ok) {
						console.log("Contact successfully updated!");
						const actions = getActions();
						actions.getContacts();
					} else {
						console.error("Failed to update contact. Server response:", response.status)
						const body = await response.json();
						console.error("Server response body:", body)
					}
				} catch (error) {
					console.error("There was an error in your request:", error);
				}
			}
		},

	};
}
export default getState;
