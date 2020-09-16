import React from 'react';
import { shallow } from 'enzyme'
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';

import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Test for useFetchGifs()', () => {

    beforeEach(() => {

    });

    test('Should return initial state', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        const { data, loading } = result.current;
        await waitForNextUpdate();
        
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Should return an images array and loading as false', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });

});
