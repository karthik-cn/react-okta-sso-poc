import React, { useState, useEffect } from "react";
import { useOktaAuth } from '@okta/okta-react';

const UserContext = React.createContext(null);

export function UserContextProvider({children}) {
  const { oktaAuth, authState } = useOktaAuth();
  const [ userInfo, setUserInfo ] = useState(null);

  const { isAuthenticated } = authState || {};

  useEffect(() => {
      if(isAuthenticated) {
          oktaAuth.getUser()
            .then(response => {
                setUserInfo(response);
            });
      } else {
        setUserInfo(null);
      }    
  }, [oktaAuth, isAuthenticated]);

  return (
    <UserContext.Provider value={{ user: userInfo, isAuthenticated }}>
      {children}
    </UserContext.Provider>
  )
};

export default UserContext; 