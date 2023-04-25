import {useEffect} from 'react';
import {User, useUser} from './useUser';
import {useLocalStorage} from './useLocalStorage';


/**
 * Basic Authentication Form.
 */
export interface LogInForm {
    username: string;
    password: string;
}

/**
 * Authentication Hook.
 *
 * @returns {Object} {user, login, logout} - The user object, login and logout functions.
 */
export const useAuth = () => {
    const {user, addUser, removeUser} = useUser();
    const {getItem} = useLocalStorage();

    useEffect(() => {
        const user = getItem('user');
        if (user) {
            addUser(JSON.parse(user));
        }
    }, []);

    const login = (form: LogInForm) => {

        const user: User = {
            id: "0",
            name: form.username,
            email: "fake@e.mail",
        }

        addUser(user);
    };

    const logout = () => {
        removeUser();
    };

    return {user, login, logout};
};