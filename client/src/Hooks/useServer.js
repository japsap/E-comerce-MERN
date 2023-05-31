const login = "http://localhost:5000/login";
const register = "http://localhost:5000/register";

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
  return {
    useRegister,
    useLogin,
    getToken,
    useLogout,
  };
};

export default useServer;
