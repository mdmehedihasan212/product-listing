import React from 'react';
import './Dashboard.css';
import ProductList from './ProductList';
import SelectItem from './SelectItem';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <ProductList></ProductList>
            <SelectItem></SelectItem>
        </div>
    );
};

export default Dashboard;