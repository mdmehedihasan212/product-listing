import React from 'react';

const ProductList = () => {
    return (
        <div>
            <h1 className='text-3xl'>Dashboard</h1>
            <input className='border-solid border-2 border-gray-400 rounded-md p-1 my-4' type="text" placeholder='Search item' />
            <select className='border-solid border-2 border-gray-400 mx-4' name="" id="">
                <option>5</option>
                <option>5</option>
                <option>5</option>
                <option>5</option>
                <option>5</option>
                <option>5</option>
            </select>
            <select className='border-solid border-2 border-gray-400' name="" id="">
                <option>5</option>
                <option>5</option>
                <option>5</option>
                <option>5</option>
                <option>5</option>
                <option>5</option>
            </select>
            <h1>ProductList</h1>
        </div>
    );
};

export default ProductList;