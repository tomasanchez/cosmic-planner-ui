import {User} from "../../../src/auth/hooks/useUser";
import {act, renderHook} from "@testing-library/react";
import {LogInForm, useAuth} from "../../../src/auth/hooks/useAuth";

describe('useUserTest', () => {

    afterEach(() => {
        localStorage.clear();
    });

    it('should set and get the User', () => {

        const form: LogInForm = {
            username: 'testName',
            password: 'testPassword'
        }

        const {result} = renderHook(() => useAuth());

        act(() => {
            result.current.login(form);
        });

        const user: User = {
            id: '0',
            name: form.username,
            email: 'fake@e.mail',
        }

        expect(result.current.user).toEqual(user);
        expect(localStorage.getItem('user')).toEqual(JSON.stringify(user));
    });

    it('should remove the user', () => {

        const form: LogInForm = {
            username: 'testName',
            password: 'testPassword'
        }

        const user: User = {
            id: '0',
            name: form.username,
            email: 'fake@e.mail',
        }

        const {result} = renderHook(() => useAuth());


        act(() => {
            result.current.login(form);
        });

        expect(result.current.user).toEqual(user);

        act(() => {
            result.current.logout();
        });

        expect(result.current.user).toBeNull();
        expect(localStorage.getItem('user')).toBe('');
    });
});
