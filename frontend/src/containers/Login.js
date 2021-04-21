import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { login } from '../actions/auth';
import axios from 'axios';
const Login = ({login, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const {email, password} = formData

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    const onSubmit = e => {
        e.preventDefault()
        login(email, password)
    }

    const continueWithGoogle = async () => {
        try{
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=http://localhost:8000`)
            window.location.replace(res.data.authorization_url);
        }
        catch(err){

        }
    }

    if (isAuthenticated) {
        return <Redirect to='/'/>
    }
    return (
        <div className='container mt-5'>
            <h1>Sign In</h1>
            <p>Sign in to your Account</p>
            <form onSubmit = {e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Enter your email here'
                        name='email'
                        value={email}
                        onChange= {e => onChange(e)}
                        required
                        />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Enter your password here'
                        name='password'
                        value={password}
                        onChange= {e => onChange(e)}
                        minLength='6'
                        required
                        />
                </div>
                <button className = 'btn btn-primary' type='submit'>Log in</button>
            </form>
            <button className='btn btn-danger mt-3' onClick={continueWithGoogle}>
                 Continue with Google
            </button>
            <p className='mt-3'>
                Don't have an account? <Link to='/signup'>Sign up</Link>
            </p>
            <p className='mt-3'>
                Forgot your password? <Link to='/reset-password'>Reset Password </Link>
            </p>
        </div>
    )
}

const mapStatetoProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStatetoProps, { login })(Login);
