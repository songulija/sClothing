import React, {useState} from 'react'
import FormInput from '../formInput/FormInput';
import './styles.scss'

function SignIn() {
    //useState initial value, and function to update initial value
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('' )
    
    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Hello')
    }

    return (
        <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={submitHandler}>
            <FormInput name='email' type='email' label='email' value={email} required handleChange={(e) => setEmail(e.target.value)}/>
            <FormInput name='password' type='password' label='password' value={password} required handleChange={(e) => setPassword(e.target.value)} />
            <input type='submit' value='' />
        </form>
        </div>
    )
}

export default SignIn
