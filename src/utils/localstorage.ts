export const isValidLocalStorage = (appID: string) => {
    const payload = getLocalStorage(appID);
    return payload !== 'undefined' ? true : false;
};

const setLocalStorage = (name: string, payload: {}) => {
    localStorage.setItem(name, JSON.stringify(payload));
};

const getLocalStorage = (name: string) => {
    const data = localStorage.getItem(name);
    return data ? JSON.parse(data) : null;
};

export { setLocalStorage, getLocalStorage };
