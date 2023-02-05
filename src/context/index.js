import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext } from "react";

const Context = createContext();

const initialState = {
  isLoading: false,
  token: null,
  isAuthenticated: false,
  user: {},
  language: "tr",
  theme: "light",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isLoading: false,
        token: action.token,
        isAuthenticated: true,
        user: action.user,
      };
    case "SIGN_OUT":
      return {
        ...state,
        isLoading: false,
        token: null,
        isAuthenticated: false,
        user: {},
      };

    case "RETRIEVE_STORAGE":
      return {
        ...state,
        isLoading: false,
        token: action.token,
        isAuthenticated: action.token?.length > 0 ? true : false,
        user: action.user,
        language: action.language,
        theme: action.theme,
      };

    case "TOGGLE_THEME":
      return {
        ...state,
        theme: action.payload,
      };

    case "TOGGLE_LANGUAGE":
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const authContext = React.useMemo(() => {
    return {
      signIn: async (accessToken, user) => {
        const { token } = accessToken;

        await AsyncStorage.setItem("token", token);

        await AsyncStorage.setItem("user", JSON.stringify(user));

        dispatch({ type: "SIGN_IN", token, user });
      },
      signOut: async () => {
        await AsyncStorage.clear();

        dispatch({ type: "SIGN_OUT" });
      },
      retrieve: async () => {
        let result = {};

        const keys = await AsyncStorage.getAllKeys();

        const itemsArray = await AsyncStorage.multiGet(keys);

        itemsArray.map((item) => {
          const [asyncStorageKey, value] = item;

          result[`${asyncStorageKey}`] =
            asyncStorageKey === "user" ? JSON.parse(value) : value;
        });

        dispatch({ type: "RETRIEVE_STORAGE", ...result });
      },
    };
  });

  const value = {
    state,
    dispatch,
    ...authContext,
  };

  // useEffect(() => {
  //   authContext.retrieve();
  // }, []);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

function useContext() {
  const context = React.useContext(Context);

  return context;
}

export { ContextProvider, useContext, Context };
