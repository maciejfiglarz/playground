import React, { useEffect, useState } from "react";
import { ReactElement } from "react";

//project imports
import { useAppDispatch, useAppSelector } from "store";
import { getUserDetails } from "store/user/userSlice";
import Loader from "ui-component/loaders/Content";

export interface AppContextProps {
  readonly isOpenNavigation: boolean;
  readonly setIsOpenNavigation: React.Dispatch<React.SetStateAction<boolean>>;
  readonly mode: "light" | "dark";
  readonly setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  readonly authModal: "login" | "register" | null;
  readonly setAuthModal: React.Dispatch<
    React.SetStateAction<"login" | "register" | null>
  >;
  readonly isGuardModal: boolean;
  readonly setIsGuardModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = React.createContext({} as AppContextProps);

const AppContextProvider = ({ children }: { children: ReactElement }) => {
  const dispatch = useAppDispatch();
  const { isFetching, userInfo, error, isSuccess } = useAppSelector(
    (state) => state.user
  );
  const [isOpenNavigation, setIsOpenNavigation] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [authModal, setAuthModal] = useState<"login" | "register" | null>(null);
  const [isGuardModal, setIsGuardModal] = useState(false);
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getUserDetails());
      console.log("xxx", isSuccess, isFetching, userInfo, error);
    };
    fetchData();
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
        isGuardModal,
        setIsGuardModal,
      }}
    >
      {isSuccess ? children : <Loader />}
    </AppContext.Provider>
  );
};

export default AppContext;
export { AppContextProvider };
