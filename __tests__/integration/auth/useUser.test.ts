import {act, renderHook} from "@testing-library/react";
import {User, useUser} from "../../../src/auth/hooks/useUser";


describe('useUserTest', () => {

    afterEach(() => {
        localStorage.clear();
    });

    it('should set and get the User', () => {

        const user: User = {
            id: 'testId',
            name: 'testName',
            email: 'testEmail'

        }

        const {result} = renderHook(() => useUser());

        act(() => {
            result.current.addUser(user);
        });

        expect(result.current.user).toEqual(user);
        expect(localStorage.getItem('user')).toEqual(JSON.stringify(user));
    });

    it('should remove the user', () => {

        const user = {
            id: 'testId',
            name: 'testName',
            email: 'testEmail'

        }

        const {result} = renderHook(() => useUser());
        act(() => {
            result.current.addUser(user);
        });

        expect(result.current.user).toBe(user);

        act(() => {
            result.current.removeUser();
        });

        expect(result.current.user).toBeNull();
        expect(localStorage.getItem('user')).toBe('');
    });
});
