import React from 'react';
import { shallow } from 'enzyme'
import '@testing-library/jest-dom';

import AddCategory from '../../components/AddCategory';

describe('Test for <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories } />);

    beforeEach(() => {

        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    });

    test('Should show <AddCategory /> successfully', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('Should to change text input', () => {

        const value = 'Goku';
        let input = wrapper.find('input');
        
        input.simulate('change', { target: { value } });
        input = wrapper.find('input');

        expect(input.prop('value')).toBe(value);
    });

    test('Should not form submit', () => {

        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('Should call setCategories() and clean text input', () => {

        const value = 'Naruto';
        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        
        expect(wrapper.find('input').prop('value')).toBe('');
    });

});
