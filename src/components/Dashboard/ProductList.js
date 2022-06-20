import React, { useEffect, useState } from 'react';
import ProductListRow from './ProductListRow';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fec-inventory-api.herokuapp.com/product-info')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='grid grid-cols-2 gap-4 scroll-auto'>
            {
                products.map(product => <ProductListRow
                    key={product.id}
                    product={product}
                ></ProductListRow>)
            }
        </div>
    );
};

export default ProductList;