import React, { useState } from 'react'
import CustomButton from '../customButton/CustomButton';
import FormInput from '../formInput/FormInput';
import { signInWithGoogle } from '../../firebase/firebase.utils.js'
import './styles.scss'

function SignIn() {
    //useState initial value, and function to update initial value
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Hello')
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={submitHandler}>
                <FormInput name='email' type='email' label='email' value={email} required handleChange={(e) => setEmail(e.target.value)} />
                <FormInput name='password' type='password' label='password' value={password} required handleChange={(e) => setPassword(e.target.value)} />
                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}Sign in with Google{' '}</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn