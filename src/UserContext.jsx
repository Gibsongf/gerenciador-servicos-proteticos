import React from "react";
import { UserContext } from "./Context";

const UserData = ({ children }) => {
  // just user data, not service, products etc
  const [data, setData] = React.useState();
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const autoLogin = () => {};
  }, []);
  return (
    <UserContext.Provider value={{ data, login, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserData;
