import React from 'react';
import { shallow } from 'enzyme'
import '@testing-library/jest-dom';

import GifExpertApp from '../GifExpertApp';

describe('Test for <GifExpertApp />', () => {
    
    test('Should show <GifExpertApp /> successfully', () => {

        const wrapper = shallow(<GifExpertApp />);
        
        expect(wrapper).toMatchSnapshot();
    });

    test('Should has <AddCategory /> component', () => {

        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper.find('AddCategory').exists()).toBe(true);
    });

    test('Should has two items of <GifCategoryGrid /> component', () => {

        const categories = ['Naruto', 'One Piece']
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

        expect(wrapper.find('GifCategoryGrid').length).toBe(categories.length);
    });

});
