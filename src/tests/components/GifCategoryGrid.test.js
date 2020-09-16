import React from 'react';
import { shallow } from 'enzyme'
import '@testing-library/jest-dom';

import GifCategoryGrid from '../../components/GifCategoryGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Test for <GifCategoryGrid />', () => {
    
    const category = 'One Punch Man';

    test('Should show <GifCategoryGrid /> successfully', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifCategoryGrid category={ category } />);
        expect(wrapper).toMatchSnapshot();
    });


    test('Sould show items when useFetchGifs() load images', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/anything/thing.jpg',
            title: 'Anything'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifCategoryGrid category={ category } />);

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifCategoryItem').length).toBe(gifs.length);
    });

});
