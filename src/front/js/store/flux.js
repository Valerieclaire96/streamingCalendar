const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: null,
      token: sessionStorage.getItem("token"),
    },
    actions: {
      createUser: async (userInfo) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: userInfo.name,
            email: userInfo.email,
            password: userInfo.password,
          }),
        };
        const res = await fetch(process.env.BACKEND_URL + "/api/signup", opts);
        if (res.status < 200 || res.status >= 300) {
          throw new Error("There was an error signing up the user");
        }
        const data = await res.json();
        setStore({ user: data });
      },
      login: async (userInfo) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userInfo.email,
            password: userInfo.password,
          }),
        };
        const res = await fetch(process.env.BACKEND_URL + "/api/login", opts);
        if (res.status < 200 || res.status >= 300) {
          throw new Error("There was an error signing in");
        }
        const data = await res.json();
        sessionStorage.setItem("token", data.access_token);

        setStore({ token: data.access_token, user: data.user });
      },
      getUser: async () => {
        const token = sessionStorage.getItem("token");
        const opts = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        const res = await fetch(process.env.BACKEND_URL + "/api/user", opts);
        if (res.status < 200 || res.status >= 300) {
          throw new Error("There was an error signing in");
        }
        const data = await res.json();
        console.log(data);
        setStore({ user: data });
        return true;
      },
      logout: () => {
        console.log("logout");
        const token = sessionStorage.removeItem("token");
        setStore({ token: null, user: null });
      },
    },
  };
};

export default getState;
