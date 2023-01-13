import { auth } from "public/firebase";
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext(null);

export function useAuth() {
  return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (auth.currentUser) {
      setUser(auth.currentUser);
    }
  }, [auth.currentUser]);

  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
