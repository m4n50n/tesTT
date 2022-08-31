const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {},
    actions: {
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
