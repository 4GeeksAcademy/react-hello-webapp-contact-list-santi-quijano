const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			agenda: []
		},
		actions: {
			getAgenda: () => {
				const getUrl = "https://playground.4geeks.com/apis/fake/contact/agenda/my_own_agenda";
				fetch(getUrl).then(response=>response.json()).then(data => {
					console.log("Fetched data:", data);
					setStore({ agenda: data});
				})
				.catch(error => {
					console.error("There was an error while fetching the agenda, try again:", error);
				});
			},
		}
	};
};

export default getState;
