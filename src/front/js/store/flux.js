const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      roles: [],
      user: {},
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
      register: (email, password, name, phone, address, rol) => {
        const store = getStore();

        fetch(process.env.BACKEND_URL + "/api/register", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            name: name,
            phone: phone,
            adreses: address,
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
            localStorage.setItem("rol", data.rol);
            setStore({ isAuthenticate: data.loged });
          })
          .catch((error) => {
            console.error("[ERROR IN LOGIN]", error);
          });
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
            setStore({ isAuthenticate: data.loged });
            setStore({ user: data.user });
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
    },
  };
};

export default getState;
