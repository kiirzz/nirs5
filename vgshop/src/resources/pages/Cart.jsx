import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { cart } from '../../data/cart'

const Cart = () => {

    function sum(cart) {
        var s = 0
        cart.cart_list.map((item) => (
            s += item.price
        ))

        return s
    }

    return (
        <div className="cart-bg">
            <div className="cart" key={cart.id}>
                <div className="cart-title">Cart</div>  
                {cart.cart_list.length === 0 ? (
                    <div className="cart-none">
                        <div className="cart-none-comment">Cart empty!</div>
                    </div>
                )
                :(
                    <div className="cart-have">
                        <div className="cart-list" key={cart.id}>
                            {cart.cart_list.map((item) => (
                                <div className="cart-element">
                                    <div className="d-flex">
                                        <div className="cart-element-img">
                                            <img src={item.image} alt="" className="cart-element-image" />
                                        </div>
                                        <div className="cart-element-text">
                                            <div className="cart-element-name">
                                                {item.name}                                        
                                            </div>
                                            <div className="cart-element-publisher-link">
                                                <Link to={`/publisher/${item.publisher_id}`} style={{ textDecoration: 'none',color: '#FFA458' }}>123</Link>
                                            </div>                                    
                                            <FontAwesomeIcon icon={icon({name: "trash"})} className="cart-element-delete"/>
                                        </div>                               
                                    </div>                       
                                    <div className="cart-element-price">
                                        ${item.price}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="cart-pay">
                            <div className="cart-pay-box">
                                <div className="cart-pay-title">Total</div>
                                <div className="d-flex justify-content-between">
                                    <div className="cart-pay-quantity">
                                        {cart.cart_list.length}
                                        {cart.cart_list.length === 1 ? " item":" items"}
                                    </div>
                                    <div className="cart-pay-sum">${sum(cart)}</div>
                                </div>
                            </div>
                            <div className="cart-pay-button-box">
                                <button className="cart-pay-button">Pay</button>
                            </div>
                        </div>
                            
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default Cart