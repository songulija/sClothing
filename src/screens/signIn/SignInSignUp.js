import React from 'react'
import SignIn from '../../components/signIn/SignIn'
import SignUp from '../../components/signUp/SignUp'
import './styles.scss'

function SignInSignUp() {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>

    )
}

export default SignInSignUp
