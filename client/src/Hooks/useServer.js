const login = "http://localhost:5000/login";
const register = "http://localhost:5000/register";
const postAdd = "http://localhost:5000/catalog";

const useServer = () => {
  const headers = {
    Accept: "application/json",
    "Content-type": "application/json",
  };

  const useRegister = (username, email, password, repeatPassword) => {
    return fetch(register, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ username, email, password, repeatPassword }),
    }).then((res) => res.json());
  };

  const useLogin = (email, password, repeatPassword) => {
    return fetch(login, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ email, password, repeatPassword }),
    }).then((res) => res.json());
  };

  const getToken = () => {
    return fetch(login, {
      headers: {
        auth: localStorage.getItem("auth"),
      },
    }).then((res) => res.json());
  };

  const useLogout = () => {
    localStorage.removeItem("auth");
    window.location.reload();
    window.location.href = '/';
  };

  const usePostAdd = (title, image, price, description, owner) => {
    return fetch(postAdd, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(title, image, price, description, owner),
    }).then((res) => res.json());
  }
  return {
    useRegister,
    useLogin,
    getToken,
    useLogout,
    usePostAdd
  };
};

export default useServer;
