import React from 'react';

const ProductListRow = ({ product }) => {
    const { supplier_name, description } = product;
    console.log(product);

    return (
        <div className='flex w-96 h-40 border-solid bg-gray-200 rounded-md relative'>
            <div>
                <img className='w-28 h-40 border border-gray-400 bg-gradient-to-r from-purple-500 to-pink-500' src="" alt="" />
            </div>
            <div className='mx-8 max-w-xs'>
                <h1 className='text-xl my-2'>{supplier_name}</h1>
                <p className='text-xs max-w-xs mr-16 text-justify' title={description}>
                    {description.length > 140 ? description.slice(0, 140) + "..." : description}
                </p>
            </div>
            <button className='mt-14 text-sm absolute bottom-10 right-4 bg-slate-400 w-20 p-1'>Add to list</button>
            <button className='mt-20 text-sm absolute bottom-4 right-4 bg-slate-400 w-20 p-1'>Details</button>
        </div>
    );
};

export default ProductListRow;