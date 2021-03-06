import React, { useEffect } from 'react'
import './styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

function CartIcon() {
    return (
        <div className='cart-icon'>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon
