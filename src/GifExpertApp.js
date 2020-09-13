import React, { useState } from 'react';

import AddCategory from './components/AddCategory';
import GifCategoryGrid from './components/GifCategoryGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

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

export default GifExpertApp;
