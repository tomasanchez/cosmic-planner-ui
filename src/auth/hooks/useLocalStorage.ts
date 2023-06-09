import {useState} from 'react';

/**
 * Custom Hook for Local Storage.
 */
export const useLocalStorage = () => {
    const [value, setValue] = useState<string | null>(null);

    const setItem = (key: string, value: string) => {
        localStorage.setItem(key, value);
        setValue(value);
    };


    const getItem = (key: string) => {
        return localStorage.getItem(key);
    };

    const removeItem = (key: string) => {
        localStorage.removeItem(key);
        setValue(null);
    };

    return {value, setItem, getItem, removeItem};
};