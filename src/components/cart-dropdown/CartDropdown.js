import React from 'react'
import CustomButton from '../customButton/CustomButton'
import './styles.scss'

function CartDropdown() {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </div>
        </div>
    )
}

export default CartDropdown
