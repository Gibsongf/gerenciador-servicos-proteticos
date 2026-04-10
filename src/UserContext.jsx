import React from "react";
import { UserContext } from "./Context";
import { GET_USER_DATA, TOKEN_VALIDATE_POST, USER_LOGIN } from "./Api";
import { useNavigate } from "react-router-dom";

const UserData = ({ children }) => {
  // just user data, not service, products etc
  const [userData, setUserData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();
  const userLogout = React.useCallback(async function () {
    setUserData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    localStorage.removeItem("token");
  }, []);

  async function getUser(token) {
    const { url, options } = GET_USER_DATA(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setUserData(json);
    setLogin(true);
    localStorage.setItem("userData", JSON.stringify(json));
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = USER_LOGIN({ username, password });
      const tokenRes = await fetch(url, options);
      const json = await tokenRes.json();
      if (!json.user) {
        throw new Error(`Error: ${json.message}`);
      }
      localStorage.setItem("token", json.token);
      await getUser(json.token);
      navigate("/conta");
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = GET_USER_DATA(token);
          const response = await fetch(url, options);
          const json = await response.json();
          setUserData(json);
          if (!response.ok) throw new Error("Token inválido");
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    // autoLogin();
  }, [userLogout]);

  const getUserData = () => {
    return JSON.parse(localStorage.getItem("userData"));
  };
  return (
    <UserContext.Provider
      value={{
        userLogin,
        userLogout,
        userData: getUserData(),
        error,
        loading,
        login,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserData;
