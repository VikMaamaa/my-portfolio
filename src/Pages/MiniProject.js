/*eslint-disable*/
import React from 'react'
import Categories from '../Components/Categories';
// import MenuItem from '../Components/MenuItem';
import MiniItem from '../Components/MiniItem';
import Title from '../Components/Title';
import portfolios from '../Components/allMiniPortfolios'
import { useState } from 'react';



const allCategories = ['All', ...new Set(portfolios.map(item => item.category))]
function MiniProject() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) => {
        if(category === 'All'){
            setMenuItems(portfolios)
            return;
        }
        const filteredData = portfolios.filter((item) =>{
            return item.category === category
        })
        setMenuItems(filteredData);
    }

    return (
        <div className="">
            <div className="title">
                <Title title={'Mini Projects'} span={'Mini Projects'} />
            </div>
            <div className="">
                <Categories  filter={filter} categories={categories}/>
                <MiniItem menuItem = {menuItems} className="" />
            </div>
        </div>
    )
}

export default MiniProject