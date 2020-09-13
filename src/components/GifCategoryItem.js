import React from 'react';
import PropTypes from 'prop-types';


export const GifCategoryItem = ({ id, title, url }) => {
    return (
        <div className="card animate__animated animate__fadeIn animate__slower">
            <img src={ url } alt={title} />
            <p className="mb-5">{ title }</p>
        </div>
    )
}

GifCategoryItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default GifCategoryItem;
