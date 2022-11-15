const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      roles: [],
      organizacion: {},
      casaacogida_list: [],
      isAuthenticate: false,
      pet_list: [],
      organizacion_list: [],
    },
    actions: {
      roles: () => {
        fetch(process.env.BACKEND_URL + "/api/roles")
          .then((response) => response.json())
          .then((response) => {
            // console.log(response);
            setStore({ roles: response });
          });
      },
      register: (
        email,
        password,
        name,
        phone,
        city,
        avaiability,
        instagram,
        animals,
        rol
      ) => {
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
            avaiability: avaiability,
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
            setStore({ isAuthenticate: data.loged });
            setStore({ organizacion: data.organizacion });
            getActions().casaacogida_list();
          })
          .catch((error) => {
            console.error("[ERROR IN LOGIN]", error);
          });
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
          // console.log(data);
          localStorage.setItem("token", data.token);
          localStorage.setItem("rol", data.organizacion.rol);
          setStore({ isAuthenticate: data.loged });
          setStore({ organizacion: data.organizacion });
          setStore({ rol: data.organizacion.rol });
        } catch (error) {}
      },
      pets: (pets) => {
        // console.log(pets);
        let body = new FormData();
        for (let key in pets) {
          body.append(key, pets[key]);
        }

        const store = getStore();
        fetch(process.env.BACKEND_URL + "/api/pet", {
          method: "POST",
          body: body,
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
          .then((resp) => {
            if (resp.ok) {
              // console.log(resp);
              return resp.json();
            }
          })
          .then((data) => {
            // console.log(data);
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
            if (data.organizacion.rol == 1) {
              navigate("/protectoralogin");
            } else if (data.organizacion.rol == 2) {
              navigate("/casaacogida");
            }
            localStorage.setItem("token", data.token);
            localStorage.setItem("rol", data.organizacion.rol);
            // console.log(data);
            setStore({ isAuthenticate: data.loged });
            setStore({ organizacion: data.organizacion });
          })
          .catch((error) => {
            console.error("[ERROR IN LOGIN]", error);
          });
      },

      casaacogida_list: () => {
        const store = getStore();

        fetch(process.env.BACKEND_URL + "/api/card_casaacogida", {
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
            // console.log(data);
            setStore({ casaacogida_list: data });
          })
          .catch((error) => {
            console.error("[ERROR IN LOGIN]", error);
          });
      },

      getorganizacion: () => {
        const store = getStore();

        fetch(process.env.BACKEND_URL + "/api/organizacion", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-type": "application/json",
          },
        })
          .then((resp) => {
            if (resp.ok) {
              return resp.json();
            } else if (resp.status == 422) {
              return resp.json();
            }
          })
          .then((data) => {
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

      perfilusuario: (email, name, phone, animals, avaiability, city) => {
        const store = getStore();

        fetch(process.env.BACKEND_URL + "/api/perfilusuario", {
          method: "PUT",
          body: JSON.stringify({
            email: email,
            name: name,
            animals: animals,
            avaiability: avaiability,
            phone: phone,
            city: city,
          }),
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-type": "application/json",
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
      logout: () => {
        localStorage.clear();
        setStore({ isAuthenticate: false, organizacion: {} });
      },
      perfilprotectora: (email, name, phone, instagram, city) => {
        const store = getStore();

        fetch(process.env.BACKEND_URL + "/api/perfilusuario", {
          method: "PUT",
          body: JSON.stringify({
            email: email,
            name: name,
            instagram: instagram,
            phone: phone,
            city: city,
          }),
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-type": "application/json",
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
            // console.log(data);
            setStore({ pet_list: data });
          })
          .catch((error) => {
            console.error("[ERROR IN LOGIN]", error);
          });
      },
      organizacion_list: () => {
        const store = getStore();

        fetch(process.env.BACKEND_URL + "/api/card_protectora", {
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
            // console.log(data);
            setStore({ organizacion_list: data });
          })
          .catch((error) => {
            console.error("[ERROR IN LOGIN]", error);
          });
      },

      editorganizacion: () => {
        const store = getStore();

        fetch(process.env.BACKEND_URL + "/api/editusuario", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-type": "application/json",
          },
        })
          .then((resp) => {
            if (resp.ok) {
              return resp.json();
            }
          })
          .then((data) => {
            // console.log(data);
            setStore({ organizacion: data });
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
