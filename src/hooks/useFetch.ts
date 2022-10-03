import { useEffect, useReducer } from 'react';
import { APIurl } from 'config';

interface State<T> {
    data?: T;
    error?: Error;
    isLoading: boolean;
}

type Action<T> =
    | { type: 'loading' }
    | { type: 'fetched'; payload: T }
    | { type: 'error'; payload: Error };

const useFetch = <T = unknown>(
    url: string,
    type: string,
    options?: RequestInit
) => {
    const initialState: State<T> = {
        error: undefined,
        data: undefined,
        isLoading: false
    };

    const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
        switch (action.type) {
            case 'loading':
                return { ...initialState, isLoading: true };
            case 'fetched':
                return {
                    ...initialState,
                    ...{ data: action.payload, isLoading: false }
                };
            case 'error':
                return {
                    ...initialState,
                    ...{ error: action.payload, isLoading: false }
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(fetchReducer, initialState);

    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            dispatch({ type: 'loading' });
            try {
                const response = await fetch(APIurl + url, {
                    ...options,
                    method: type
                });
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = await response.json();
                dispatch({ type: 'fetched', payload: data });
            } catch (error) {
                dispatch({ type: 'error', payload: error as Error });
            }
        };
        fetchData();
    }, [url]);
    return state;
};

export default useFetch;
