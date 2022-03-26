import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import "./ProductWrapper.css"
import Cart from '../Cart/Cart'

export default function ProductWrapper() {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [randomProduct, setRandomProduct] = useState();
    const [cProduct, setCProduct] = useState(0);

    // Fetching data from server
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch("data.json");
            const data = await result.json();
            setProducts(data);
        }
        fetchData();
    }, [])

    // Add Item to the Cart
    const setCart = (product) => {
        let isExisted = false;
        cartItems.forEach(p => {
            if (product.id === p.id) {
                isExisted = true;
            }
        });
        if (isExisted) {
            alert('Item already added');
        } else {
            // setCartItems(oldItems => [...oldItems, product]);
            if (cProduct < 4) {
                setCartItems(oldItems => [...oldItems, product]);
                setCProduct(prev => prev + 1)

            } else {
                alert('You cannot add more product')
            }
        }
    }

    // Delete Product From Cart
    const dltItem = (id) => {
        const newList = cartItems.filter((item) => item.id !== id);
        setCartItems(newList)
    }

    // Reset Cart
    const resetCart = () => {
        setCartItems([]);
        setRandomProduct([])
        setCProduct(0)
    }

    // Random Items 
    const randItem = () => {
        if (cartItems.length > 0) {
            const randomIndex = Math.floor(Math.random() * cartItems.length);
            const item = cartItems[randomIndex];
            setRandomProduct([item]);
        } else {
            setRandomProduct([]);
        }
    }

    return (
        <div className="main-product-wrapper">
            <div className="mini-container">
                <div className="product_wrapper_with_cart">
                    <div className="product-wrapper">

                        {
                            products.map(product => <Product key={product.id} product={product} setCartFunc={setCart} />)
                        }
                    </div>
                    <Cart randItem={randomProduct} chooseRandom={randItem} resetCart={resetCart} dltItem={dltItem} cartItems={cartItems} />
                </div>
            </div>
        </div>
    )
}