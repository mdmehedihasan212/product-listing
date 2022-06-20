import React from 'react';
import './Dashboard.css';
import ProductList from './ProductList';
import SelectItem from './SelectItem';

const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <div>
                <h1 className='text-3xl'>Dashboard</h1>
                <input className='border-solid border-2 border-gray-400 rounded-md p-1 my-4' type="text" placeholder='Search item' />
                <select className='border-solid border-2 border-gray-400 mx-4 p-1 rounded-md' name="" id="">
                    <option>5</option>
                    <option>5</option>
                    <option>5</option>
                    <option>5</option>
                    <option>5</option>
                    <option>5</option>
                </select>
                <select className='border-solid border-2 border-gray-400 p-1 rounded-md' name="" id="">
                    <option>10</option>
                    <option>10</option>
                    <option>10</option>
                    <option>10</option>
                    <option>10</option>
                    <option>10</option>
                </select>
            </div>
            <div className='dashboard'>
                <ProductList></ProductList>
                <SelectItem></SelectItem>
            </div>
        </div>
    );
};

export default Dashboard;