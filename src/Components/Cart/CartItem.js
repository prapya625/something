import React from 'react'

export default function CartItem(props) {
    const { image, name, deleteItem, id } = props;
    return (
        <div className="cartItem">
            <div className="cart_item_content">
                <img className="cart_item_image" src={image} />
                <p className="cart_item_name">{name}</p>
            </div>
            <div className="cart_item_action">
                <button onClick={() => deleteItem(id)} className="cart_item_button"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg></button>
            </div>
        </div>
    )
}
