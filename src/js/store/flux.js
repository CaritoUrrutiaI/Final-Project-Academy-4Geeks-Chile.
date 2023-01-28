const getState = ({
	getStore,
	getActions,
	setStore
}) => {
	return {
		store: {
			email: '',
			user: {},
			recetas: [],
			recetasFav: [],
			todo: [],
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

				fetch("https://3000-4geeksacade-flaskresthe-nxl0tay09lo.ws-us84.gitpod.io/user", requestOptions)
					.then(response => response.json())
					.then(result => {
							console.log(result)
							if (result.token) {
								setStore({
									user: result
								})
								alert("ingreso completado")
								window.location.href = "/vistausuario";
								console.log(result)
								if (result.token) {
									localStorage.setItem('datauser', JSON.stringify(result))
									localStorage.setItem('user-token', result.token);
									setStore({
										user: result
									})
									alert("ingreso completado")
									window.location.href = "/";
								} else {
									alert("error")
								}
							}
						}

					)
				
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

				fetch("https://3000-4geeksacade-flaskresthe-nxl0tay09lo.ws-us84.gitpod.io/signup", requestOptions)
					.then(response => response.json())
					.then(result => {
							console.log(result)
							if (result.token) {
								setStore({
									user: result
								})
								alert("ingreso completado")
								window.location.href = "/vistausuario";
								console.log(result)
								if (result.token) {
									localStorage.setItem('datauser', JSON.stringify(result))
									setStore({
										user: result
									})
									alert("ingreso completado")
									window.location.href = "/";
								} else {
									alert("error")
								}
							}
						}

					)
					.catch(error => console.log('error', error));
			},
			recetasApi: () => {
				fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian")
					.then(response => response.json())
					.then(data => setStore({
						recetas: data.meals
					}))
			},
			addRecetasFav: (nombre) => {
				const store = getStore();
				store.recetasFav != '' ?
					setStore({
						recetasFav: [...store.recetasFav, nombre]
					}) :
					setStore({
						recetasFav: [nombre]
					})
			},

			deleteRecetasFav: (nombre) => {
				const store = getStore();
				setStore({
					recetasFav: store.recetasFav.filter((nom) => {
						return nom != nombre
					})
				})
			},
			addTodo: (registro) => {
				const store = getStore();
				store.todo != '' ?
					setStore({
						todo: [...store.todo, registro]
					}) :
					setStore({
						todo: [registro]
					})
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