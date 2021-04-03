import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils.js'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './styles.scss'

//destructure props that are passed to header component
function Header() {

    //useSelector is function to get store(global state) & we can pullout user state from it
    const user = useSelector((state) => state.user)
    const { currentUser } = user;//destructure to get current user from user state

    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
                )}
            </div>
        </div>
    )
}//if currentUser is passed then show SignOut, onClick call auth method signOut

export default Header
