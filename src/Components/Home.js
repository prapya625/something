import React, { useState } from 'react'
import BlogRow from './Blogs/BlogRow';
import Navbar from './Navbar/Navbar'
import ProductWrapper from './ProductWrapper/ProductWrapper'

export default function Product() {
    const [darkMode, setDarkMode] = useState(false);

    const changeTheme = () => {
        darkMode === false ? setDarkMode(true) : setDarkMode(false);
    }

    return (
        <div className={`home-${darkMode === true ? 'dark' : ''}`}>
            <Navbar changeTheme={changeTheme} status={darkMode} />
            <ProductWrapper darkMode={darkMode} />
            <BlogRow />
    
        </div>
    )
}
