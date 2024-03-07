import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005"

const AuthContext = React.createContext()


function AuthProviderWrapper(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [authError, setAuthError] = useState(null)
  
    const storeToken = (token) => {
      localStorage.setItem("authToken", token)
    }

    const authenticateUser = () => {
        const storedToken = localStorage.getItem("authToken");   // Get token from local storage
    
        if (storedToken) {
          axios.get(`${API_URL}/auth/verify`, {
              headers: { Authorization: `Bearer ${storedToken}` },  // Send the JWT token to requests header
            })
            .then((response) => {
              const user = response.data;  // If user is verified, useStates get updated
              setIsLoggedIn(true);
              setIsLoading(false);
              setUser(user);
            })
            .catch((error) => {
              if (error) {
                setAuthError(error.response.data.message);
                return;
              }
              // If there's an invalid token
              setIsLoggedIn(false);
              setIsLoading(false);
              setUser(null);
            });
        } else {
          // If the token is not available
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
        }
      };
    

      // Removing token when logging out
      const removeToken = () => {
        localStorage.removeItem("authToken");
      };
    
      const logOutUser = () => {
        removeToken();
        authenticateUser();
      };
    
      useEffect(() => {
        // Run the function after the initial render,
        // after the components in the App render for the first time.
        authenticateUser();
      }, []);
    
      return (
        <AuthContext.Provider
          value={{
            isLoggedIn,
            isLoading,
            user,
            storeToken,
            authenticateUser,
            logOutUser,
            authError,
          }}
        >
          {props.children}
        </AuthContext.Provider>
      );
    }
    
    export { AuthProviderWrapper, AuthContext };