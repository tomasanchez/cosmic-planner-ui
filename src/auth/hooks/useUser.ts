import {useState} from 'react';
import {useLocalStorage} from './useLocalStorage';

export interface User {
    id: string;
    name: string;
    email: string;
}

export const useUser = () => {

    const [user, setUser] = useState<User | null>(null);
    const {setItem} = useLocalStorage();

    const addUser = (newUser: User) => {
        setUser(newUser);
        setItem('user', JSON.stringify(newUser));
    };

    const removeUser = () => {
        setUser(null);
        setItem('user', '');
    };


    return {user, addUser, removeUser};
};