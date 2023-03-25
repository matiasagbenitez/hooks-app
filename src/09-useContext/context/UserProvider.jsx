import { useState } from "react";
import { UserContext } from "./UserContext";

// const user = {
//     id: 123,
//     name: 'Matías Benítez',
//     email: 'matias@correo.com'
// }

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    // <UserContext.Provider value={{ user }}>
    <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
  );
};
