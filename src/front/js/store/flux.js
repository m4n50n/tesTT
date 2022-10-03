const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      roles: "",
      organizacion: {},
      isAuthenticate: false,
      pet_list: [],
    },
    actions: {
      roles: () => {
        fetch(process.env.BACKEND_URL + "/api/roles")
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
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
            aviability: aviability,
            animals: animals,
            instagram: instagram,
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
            console.log(data);
            setStore({ isAuthenticate: data.loged });
            setStore({ organizacion: data.organizacion });
          })
          .catch((error) => {
            console.error("[ERROR IN LOGIN]", error);
          });
      },
      logout: () => {
        localStorage.clear();
        setStore({ isAuthenticate: false, organizacion: {} });
      },

      login: async (email, password, navigate) => {
        const store = getStore();
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
            }),
            headers: {
              "Content-type": "application/json",
            },
          });
          const data = await resp.json();
          if (data.organizacion.rol == 1) {
            navigate("/protectoralogin");
          } else if (data.organizacion.rol == 2) {
            navigate("/casaacogida");
          }
          console.log(data);
          localStorage.setItem("token", data.token);
          localStorage.setItem("rol", data.organizacion.rol);
          setStore({ isAuthenticate: data.loged });
          setStore({ organizacion: data.organizacion });
          setStore({ rol: data.organizacion.rol });
        } catch (error) {
          // setStore({ isAuthenticate: data.loged, msg: data.msg });
          console.error("[ERROR IN LOGIN]", error);
        }
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
      formulariocontacto: (email, text) => {
        const store = getStore();
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
            console.log(data);
            setStore({ isAuthenticate: data.loged });
            setStore({ organizacion: data.organizacion });
          })
          .catch((error) => {
            console.error("[ERROR IN LOGIN]", error);
          });
      },
      logout: () => {
        localStorage.clear();
        setStore({ isAuthenticate: false, organizacion: {} });
      },

      perfilusuario: (email, avaiability, name, phone, city, animals) => {
        const store = getStore();

        fetch(process.env.BACKEND_URL + "/api/perfilusuario", {
          method: "GET",
          body: JSON.stringify({
            email: email,
            name: name,
            animals: animals,
            avaiability: avaiability,
            phone: phone,
            city: city,
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
            console.log(data);
            setStore({ isAuthenticate: data.loged });
            setStore({ organizacion: data.organizacion });
          })
          .catch((error) => {
            console.error("[ERROR IN LOGIN]", error);
          });
      },
      logout: () => {
        localStorage.clear();
        setStore({ isAuthenticate: false, organizacion: {} });
      },

      editUser: (email, name, phone, animals, avaiability, city) => {
        const store = getStore();

        fetch(process.env.BACKEND_URL + "/api/edituser", {
          method: "PUT",
          body: JSON.stringify({
            email: email,
            name: name,
            phone: phone,
            animals: animals,
            avaiability: avaiability,
            city: city,
          }),
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
          .then((resp) => {
            if (resp.ok) {
              return resp.json();
            }
          })
          .then((data) => {
            setStore({ organizacion: data.organizacion });
          })
          .catch((error) => {
            console.error("[ERROR IN LOGIN]", error);
          });
      },
      pet_list: () => {
        const store = getStore();

        fetch(process.env.BACKEND_URL + "/api/formulariopets", {
          method: "GET",
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
            console.log(data);
            setStore({ pet_list: data });
          })
          .catch((error) => {
            console.error("[ERROR IN LOGIN]", error);
          });
      },

      organizacion: () => {
        const store = getStore();

        fetch(process.env.BACKEND_URL + "/api/organizacion", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
          .then((resp) => {
            if (resp.ok) {
              return resp.json();
            }
          })
          .then((data) => {
            console.log(data);
            setStore({ isAuthenticate: data.loged });
            setStore({ organizacion: data.organizacion });
          })
          .catch((error) => {
            console.error("[ERROR IN LOGIN]", error);
          });
      },

      recuperacioncontrasena: (email) => {
        const store = getStore();
        fetch(process.env.BACKEND_URL + "/api/recuperacioncontrasena", {
          method: "POST",
          body: JSON.stringify({
            email: email,
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
            setStore({
              msg: data.msg,
            });
          })
          .catch((error) => {
            console.error("[ERROR IN LOGIN]", error);
          });
      },
    },
  };
};

export default getState;
