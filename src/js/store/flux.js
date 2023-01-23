const getState = ({
	getStore,
	getActions,
	setStore
}) => {
	return {
		store: {
			user:{},
			demo: [{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			login: (email, contraseña) => {
				const store = getStore()
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email: email,
					password: contraseña
				});

				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow'
				};

				fetch("https://3000-4geeksacade-flaskresthe-nxl0tay09lo.ws-us83.gitpod.io/user", requestOptions)
					.then(response => response.text())
					.then(result => {setStore({user:result})
						alert("ingreso completado")
						window.location.href ="/";
					})
					.catch(error => console.log('error', error));
			},
			signup: (username, email, name, apellido, contraseña) => {
				const store = getStore()
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					username: username,
					email: email,
					nombre: name,
					apellido: apellido,
					password: contraseña,

				});

				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow'
				};

				fetch("https://3000-4geeksacade-flaskresthe-nxl0tay09lo.ws-us83.gitpod.io/signup", requestOptions)
					.then(response => response.json())
					.then(result => setStore({
						email: result.email
					}))
					.catch(error => console.log('error', error));

				return true
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({
					demo: demo
				});
			}
		}
	};
};

export default getState;