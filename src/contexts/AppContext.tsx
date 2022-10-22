import React, { useEffect, useState } from "react";
import { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { getUserDetails } from "store/user/userSlice";

export interface AppContextProps {
  readonly isOpenNavigation: boolean;
  readonly setIsOpenNavigation: React.Dispatch<React.SetStateAction<boolean>>;
  readonly mode: "light" | "dark";
  readonly setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  readonly authModal: "login" | "register" | null;
  readonly setAuthModal: React.Dispatch<
    React.SetStateAction<"login" | "register" | null>
  >;
}

const AppContext = React.createContext({} as AppContextProps);

const AppContextProvider = ({ children }: { children: ReactElement }) => {
  const dispatch = useAppDispatch();
  const { loading, userInfo, error } = useAppSelector((state) => state.user);
  const [isOpenNavigation, setIsOpenNavigation] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [authModal, setAuthModal] = useState<"login" | "register" | null>(null);
  const [mode, setMode] = useState<"light" | "dark">("light");
  console.log("xxx", loading, userInfo, error);
  useEffect(() => {
    dispatch(getUserDetails());
  }, []);

  return (
    <AppContext.Provider
      value={{
        isOpenNavigation,
        setIsOpenNavigation,
        mode,
        setMode,
        authModal,
        setAuthModal,
      }}
    >
      {loading ? <div>Loading...</div> : children}
    </AppContext.Provider>
  );
};

export default AppContext;
export { AppContextProvider };
