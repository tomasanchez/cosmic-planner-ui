import {renderHook, act} from '@testing-library/react';
import {useLocalStorage} from '../../../../src/auth/hooks/useLocalStorage';

describe('useLocalStorage', () => {

    afterEach(() => {
        localStorage.clear();
    });

    it('should set and get the value from local storage', () => {
        const key = 'testKey';
        const value = 'testValue';

        const {result} = renderHook(() => useLocalStorage());

        act(() => {
            result.current.setItem(key, value);
        });

        expect(result.current.getItem(key)).toBe(value);
    });

    it('should remove the value from local storage', () => {
        const key = 'testKey';
        const value = 'testValue';

        const {result} = renderHook(() => useLocalStorage());

        act(() => {
            result.current.setItem(key, value);
        });

        expect(result.current.getItem(key)).toBe(value);

        act(() => {
            result.current.removeItem(key);
        });

        expect(result.current.getItem(key)).toBeNull();
    });
});
