import React, { useState } from 'react';
import "./Cart.css";
import CartItem from './CartItem';

export default function Cart({ cartItems, dltItem, resetCart, chooseRandom, randItem }) {
    console.log(randItem);
    const [showRand, setShowRand] = useState(false);

    return (
        <div className="cart">
            <div className="cart-products">
                <p className="error_msg">{cartItems.length === 0 ? 'No Items Added in Cart' : `Total : ${cartItems.length} product${cartItems.length > 1 ? 's' : ''}`}</p>
                {
                    cartItems.map(item => (
                        <CartItem key={item.id} id={item.id} deleteItem={dltItem} image={item.image} name={item.name} />
                    ))
                }
            </div>
            <br />
            <hr /> <br />
            <div className="cart_btn_wrapper">
                <button onClick={() => {
                    chooseRandom();
                    setShowRand(!showRand);
                }} className="cart_btn">Choose 1 for Me</button>
                <button className="cart_btn" onClick={resetCart}>Reset</button>

            </div>
            {(showRand && randItem.length > 0) &&
                <>
                    <br />
                    <hr />
                    <div>
                        <p id='rand' className="error_msg"> Random Product To Choose </p>
                        <CartItem id={randItem[0].id} deleteItem={() => { }} image={randItem[0].image} name={randItem[0].name} />
                    </div>
                </>}
        </div>
    )
}
