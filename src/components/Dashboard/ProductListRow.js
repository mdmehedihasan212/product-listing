import React from 'react';

const ProductListRow = ({ product }) => {
    const { name, description } = product;

    return (
        <div className='flex w-80 border-solid bg-gray-200 rounded-md'>
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    );
};

export default ProductListRow;