import React, { useState } from 'react';
import { ReactElement } from 'react';

export interface AppContextProps {
    readonly isOpenNavigation: boolean;
    readonly setIsOpenNavigation: React.Dispatch<React.SetStateAction<boolean>>;
    readonly mode: 'light' | 'dark';
    readonly setMode: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
    readonly authModal: 'login' | 'register' | null;
    readonly setAuthModal: React.Dispatch<
        React.SetStateAction<'login' | 'register' | null>
    >;
}

const AppContext = React.createContext({} as AppContextProps);

const AppContextProvider = ({ children }: { children: ReactElement }) => {
    const [isOpenNavigation, setIsOpenNavigation] = useState(true);
    const [authModal, setAuthModal] = useState<'login' | 'register' | null>(
        null
    );
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    return (
        <AppContext.Provider
            value={{
                isOpenNavigation,
                setIsOpenNavigation,
                mode,
                setMode,
                authModal,
                setAuthModal
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
export { AppContextProvider };
