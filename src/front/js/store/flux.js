const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {},
    actions: {
      register: (email, password, name, phone, adresses, rol) => {
        const store = getStore();

        fetch(process.env.BACKEND_URL + "/api/register", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            name: name,
            phone: phone,
            adreses: adresses,
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
            setStore({ isAuthenticate: data.loged, msg: data.msg });
            console.error("[ERROR IN LOGIN]", error);
          });
      },
    },
  };
};

export default getState;
