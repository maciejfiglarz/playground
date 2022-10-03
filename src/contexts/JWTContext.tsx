import React, { useEffect, useState } from 'react';
import { useAppDispatch } from 'store';
import { loginByToken } from 'store/acccoutSlice';

//project imports

export interface JWTContext {
    readonly isLogged: boolean;
    readonly setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

type Props = {
    children: React.ReactNode | React.ReactNode[];
};

// export type JWTContextType = {
//     isLoggedIn: boolean;
//     isInitialized?: boolean;
//     user?: UserProfile | null | undefined;
//     logout: () => void;
//     login: (email: string, password: string) => Promise<void>;
//     register: (
//         email: string,
//         password: string,
//         firstName: string,
//         lastName: string
//     ) => Promise<void>;
//     resetPassword: (email: string) => void;
//     updateProfile: VoidFunction;
// };

// const setSession = (serviceToken?: string | null) => {
//     if (serviceToken) {
//         localStorage.setItem('serviceToken', serviceToken);
//         axios.defaults.headers.common.Authorization = `Bearer ${serviceToken}`;
//     } else {
//         localStorage.removeItem('serviceToken');
//         delete axios.defaults.headers.common.Authorization;
//     }
// };

// const verifyToken: (st: string) => boolean = (serviceToken) => {
//     // if (!serviceToken) {
//     //     return false;
//     // }
//     // const decoded: KeyedObject = jwtDecode(serviceToken);
//     // /**
//     //  * Property 'exp' does not exist on type '<T = unknown>(token: string, options?: JwtDecodeOptions | undefined) => T'.
//     //  */
//     // return decoded.exp > Date.now() / 1000;
// };

const JWTContext = React.createContext({} as JWTContext);

const JWTContextProvider = ({ children }: Props) => {
    const [isLogged, setIsLogged] = useState(false);
    // const [user, setUser] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const init = async () => {
            // try {
            const serviceToken = window.localStorage.getItem('serviceToken');

            if (typeof serviceToken === 'string') {
                // @ts-ignore
                dispatch(loginByToken(serviceToken));
            }
        };

        init();
    }, []);

    return (
        <JWTContext.Provider value={{ isLogged, setIsLogged }}>
            {children}
        </JWTContext.Provider>
    );
};

export default JWTContext;
export { JWTContextProvider };
