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
			datosReceta: null,
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

 
				fetch("https://3000-4geeksacade-flaskresthe-nxl0tay09lo.ws-us85.gitpod.io/user", requestOptions) //Cambiar Ruta, dependiendo del Gitpot Backend

					.then(response => response.json())
					.then(result => {
							console.log(result)
							if (result.token) {
								localStorage.setItem('datauser', JSON.stringify(result))

								localStorage.setItem('user-token', JSON.stringify(result.token));

								setStore({
									user: result
								})
								window.location.href = "/vistausuario";
							} else {
								alert("Error: usuario no registrado")
								console.log("error")
							}
						}

					)

					.catch(error => {
						console.log('error', error)

					});

			},

			recoverpass: (email, apellido) => {
				const store = getStore()
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email: email,
					apellido: apellido
				});

				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow'
				};

				fetch("https://3000-4geeksacade-flaskresthe-nxl0tay09lo.ws-us85.gitpod.io/forgotpass", requestOptions)
					.then(response => response.json())
					.then(result => {
						console.log(result)
						if (result === "logrado") {
							window.location.href = "/cambiarcontrasena";
						}
					})
					.catch(error => console.log('error', error));

			},
			resetpass: (email,contraseña,newpass) => {
				const store = getStore()
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email:email,
					password: contraseña,
					newpass: newpass
				});

				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow'
				};  

				fetch("https://3000-4geeksacade-flaskresthe-nxl0tay09lo.ws-us85.gitpod.io/changepass", requestOptions)
					.then(response => response.json())
					.then(result => {
						console.log(result)
						localStorage.setItem("password", newpass);
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


				fetch("https://3000-4geeksacade-flaskresthe-nxl0tay09lo.ws-us85.gitpod.io/signup", requestOptions) //Cambiar Ruta, dependiendo del Gitpot Backend

					.then(response => response.json())
					.then(result => {
							console.log(result)
							if (result.token) {
								setStore({
									user: result
								})
								alert("ingreso completado")
								//window.location.href = "/vistausuario";
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
			getRecetaPorId: (id) => {
				fetch(id != null ? "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id : "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52807")
					.then(response => response.json())
					.then(data => setStore({
							datosReceta: data.meals
						})

					)

			},
			deleteRecetasFav: (nombre) => {
				const store = getStore();
				setStore({
					recetasFav: store.recetasFav.filter((nom) => {
						return nom != nombre
					})
				})
			},
			deleteTodo: (nombre) => {
				const store = getStore();
				setStore({
					todo: store.todo.filter((nom) => {
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