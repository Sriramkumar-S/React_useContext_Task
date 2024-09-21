
import { useContext, useEffect, useRef, useState } from 'react'
import CartContext from '../../Context/CartContext'
import Carts from './Carts'

const CartPage = () => {

    const productObj = useContext(CartContext)

    const updatePrice = (initalQty, newQty, price) => {
        const totalPrice = (newQty > initalQty) ? (initialTotalPrice + (price * newQty) - (initalQty * price)) : (initialTotalPrice - (initalQty * price) + (price * newQty))
        setTotalPrice(totalPrice);
        setInitialTotalPrice(totalPrice);
    }

    const sumOfPrice = productObj.cartItemData.reduce((acc, curr) => acc + curr.price, 0)

    const [initialTotalPrice, setInitialTotalPrice] = useState(sumOfPrice)

    const [totalPrice, setTotalPrice] = useState(initialTotalPrice)

    const isRemovedUseRef = useRef(false);

    useEffect(() => {
        setTotalPrice(initialTotalPrice)
    }, [initialTotalPrice])

    useEffect(() => {
        if (!isRemovedUseRef) {
            setInitialTotalPrice(sumOfPrice)
        }
    }, [sumOfPrice])

    const removeProduct = (id, price) => {
        setInitialTotalPrice(initialTotalPrice - price)
        isRemovedUseRef.current = true;
        productObj.removeFromCart(id)
    }

    return (
        <>

            <div className="main-div">
                <div className="container">
                    <div className="row">
                        {productObj.cartItemData.map(element => (
                            <Carts key={element.id} {...element} updatePrice={updatePrice} removeProduct={removeProduct} />
                        ))}
                        <div>
                            <p style={{ float: 'left' }}><b>SUB TOTAL:</b> <span style={{ marginLeft: '60rem' }}><b>$ {totalPrice.toFixed(2)}</b></span></p>
                            <p style={{ float: 'left' }}><b>SHIPPING:</b> <span style={{ marginLeft: '61rem' }}><b>FREE</b></span></p>
                        </div>
                        <hr />
                        <div>
                            <p style={{ float: 'left' }}><b>TOTAL:</b> <span style={{ marginLeft: '62rem' }}><b>$ {totalPrice.toFixed(2)}</b></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPage