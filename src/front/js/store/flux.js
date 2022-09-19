const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      roles: [],
      organizacion: {},
      isAuthenticate: false,
    },
    actions: {
      roles: () => {
        fetch(process.env.BACKEND_URL + "/api/roles")
          .then((response) => response.json())
          .then((response) => {
            setStore({ roles: response });
          });
      },
      register: (email, password, name, phone, city, rol) => {
        const store = getStore();

        fetch(process.env.BACKEND_URL + "/api/register", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            name: name,
            phone: phone,
            city: city,
            rol: rol,
          }),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((resp) => {
            if (resp.ok) {
              return resp.json();
            }
          })
          .then((data) => {
            localStorage.setItem("token", data.token);
            localStorage.setItem("rol", data.organizacion.rol);
            console.log (data)
            setStore({ isAuthenticate: data.loged });
            setStore({ organizacion: data.organizacion });
          })
          .catch((error) => {
            console.error("[ERROR IN LOGIN]", error);
          });
      },
      logout:() => {
      localStorage.clear()
      setStore({isAuthenticate:false,organizacion:{}})

    

      },







      login: (email, password) => {
        const store = getStore();
        fetch(process.env.BACKEND_URL + "/api/login", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
          }),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((resp) => {
            if (resp.ok) {
              return resp.json();
            }
          })
          .then((data) => {
            localStorage.setItem("token", data.token);
            localStorage.setItem("rol", data.organizacion.rol);
            setStore({ isAuthenticate: data.loged });
            setStore({ organizacion: data.organizacion });
          })
          .catch((error) => {
            setStore({ isAuthenticate: data.loged, msg: data.msg });
            console.error("[ERROR IN LOGIN]", error);
          });
      },
      pets: (pets) => {
        let body = new FormData();
        for (let key in pets) {
          body.append(key, pets[key]);
        }
        const store = getStore();
        fetch(process.env.BACKEND_URL + "/api/pets", {
          method: "POST",
          body: body,
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((resp) => {
            if (resp.ok) {
              return resp.json();
            }
          })
          .then((data) => {
            setStore({ newPets: data });
          })
          .catch((error) => {
            console.error("[ERROR IN LOGIN]", error);
          });
      },

      getpets: (pets) => {
        let body = new FormData();
        for (let key in pets) {
          body.append(key, pets[key]);
        }
        const store = getStore();
        fetch(process.env.BACKEND_URL + "/api/pets", {
          method: "GET",
          body: body,
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((resp) => {
            if (resp.ok) {
              return resp.json();
            }
          })
          .then(console.log(json))

          .catch((error) => {
            console.error("[ERROR IN LOGIN]", error);
          });
      },




     formulariocontacto: (email,text) => {
        const store= getStore();

        fetch(process.env.BACKEND_URL + "/api/formulariocontacto", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            text: text,
          }),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((resp) => {
            if (resp.ok) {
              return resp.json();
            }
          })
          .then((data) => {
            localStorage.setItem("token", data.token);
            localStorage.setItem("rol", data.organizacion.rol);
            console.log (data)
            setStore({ isAuthenticate: data.loged });
            setStore({ organizacion: data.organizacion });
          })
          .catch((error) => {
            console.error("[ERROR IN LOGIN]", error);
          });
      },
      logout:() => {
      localStorage.clear()
      setStore({isAuthenticate:false,organizacion:{}})

    

      },












    },
  };
};

export default getState;
