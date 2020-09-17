import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className= "checkout">
            <div className="checkout__left">
            <img className= "checkout__ad" 
            alt=""
            src="https://tpc.googlesyndication.com/simgad/5665861353157090620?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qnQSurpnp309dEO0s9sfopejxEn9Q" />
            {basket?.length === 0?(
                <div>
                    <h2>
                        Your Shopping Basket is empty
                    </h2>
                    <p>
                        You have no items in your basket. To buy one or more items, click "Add to basket" next to the item
                    </p>
                </div>
            ):(
                <div >
                    <h2 className="checkout__title">
                        Your Shopping Basket.
                    </h2>

                    {
                        basket.map(item=>(
                            <CheckoutProduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                            
                            />
                        ))
                    }
                </div>
            )}
            </div>
            {
                basket.length > 0 && (
                    <div className="checkout__right">
                        
                        <Subtotal/>
                    </div>
                )
            }
        </div>
    )
}

export default Checkout
