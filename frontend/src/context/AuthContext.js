import { createContext, useEffect, useReducer } from "react";

const initial_state = {
  user: null,
  loading: false,
  error: null
};

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      }
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      }
    case "REGISTER_SUCCESS":
      return {
        user: null,
        loading: false,
        error: null,
      }
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      }
    default:
      return state;
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initial_state);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        dispatch({ type: "LOGIN_SUCCESS", payload: parsedUser });
      } catch (error) {
        // Handle the error, e.g., remove the invalid data from localStorage
        localStorage.removeItem('user');
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      user: state.user,
      loading: state.loading,
      error: state.error,
      dispatch,
    }}>
      {children}
    </AuthContext.Provider>
  );
}
