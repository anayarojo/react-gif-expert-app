import React from 'react';
import { shallow } from 'enzyme'
import '@testing-library/jest-dom';

import GifCategoryItem from '../../components/GifCategoryItem';

describe('Test for <GifCategoryItem />', () => {
    
    const title = 'Title';
    const url = 'https://localhost/something.jpg';
    const wrapper = shallow(<GifCategoryItem title={ title } url={ url } />);

    test('Should show <GifCategoryItem /> successfully', () => {
    
        expect(wrapper).toMatchSnapshot();
    });

    test('Should has a paragraph with title prop', () => {
    
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('Should has an image equal to url prop', () => {
    
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
    });

    test('Should has an image with alt equal to title prop', () => {
    
        const img = wrapper.find('img');
        expect(img.prop('alt')).toBe(title);
    });

    test('Should has "animate__fadeIn" class', () => {
    
        const div = wrapper.find('div');
        expect(div.hasClass('animate__fadeIn')).toBe(true);
    });

});
