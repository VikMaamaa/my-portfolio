/*eslint-disable*/
import React from 'react'
import Categories from '../Components/Categories';
import MenuItem from '../Components/MenuItem';
import Title from '../Components/Title';
import portfolios from '../Components/allPortfolios'
import { useState } from 'react';



const allCategories = ['All', ...new Set(portfolios.map(item => item.category))]
function PortfoliosPage() {
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
        <div className="PortfolioPage">
            <div className="title">
                <Title title={'Projects'} span={'Projects'} />
            </div>
            <div className="portfolios-data">
                <Categories  filter={filter} categories={categories}/>
                <MenuItem menuItem = {menuItems} className="" />
            </div>
        </div>
    )
}

export default PortfoliosPage
