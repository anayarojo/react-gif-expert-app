import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AddCategory from './components/AddCategory';
import GifCategoryGrid from './components/GifCategoryGrid';

const GifExpertApp = ({ defaultCategories }) => {

    // const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState(defaultCategories);

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory setCategories={ setCategories } />
            <hr className="mb-5" />
            {
                categories.map((category) => (
                    <GifCategoryGrid 
                        key={ category } 
                        category={ category } 
                    />
                ))
            }
        </>
    );
}

GifExpertApp.propTypes = {
    defaultCategories: PropTypes.array,
};

GifExpertApp.defaultProps = {
    defaultCategories: ['One Punch'],
};

export default GifExpertApp;
