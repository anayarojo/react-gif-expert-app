import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifCategoryItem from './GifCategoryItem';

const GifCategoryGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            { loading && <p>Loading...</p> }
            <div className="card-grid">
            {
                images.map((img) => (
                    <GifCategoryItem
                        key={ img.id }
                        { ...img }
                    />
                ))
            }
            </div>
        </>
    )
}

GifCategoryGrid.propTypes = {
    category: PropTypes.string.isRequired
};

export default GifCategoryGrid;
