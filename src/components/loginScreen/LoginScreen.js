import React, { useState } from 'react';
import SignUpScreen from '../signUpScreen/SignUpScreen';
import './LoginScreen.css';

function LoginScreen() {
    const [isSignUp, setIsSignUp] = useState(false);
    return (
        <div className='loginScreen' >
            <div>
                <img className='loginScreen__logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" />
                <button className='loginScreen__btn' onClick={() => setIsSignUp(true)} >Sign In</button>
                <div className='loginScreen__gradient' />
            </div>
            <div className="loginScreen__body">
                {isSignUp ? (
                    <SignUpScreen />
                ) : (
                    <>
                   <h1>Unlimited films, TV programmes and more.</h1>
                   <h2>Watch anywhere. Cancel any time.</h2>
                   <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                   <div className="loginScreen__input">
                       <form>
                            <input type="text" placeholder='Email address' />
                            <button className='loginScreen__btn__getStart' onClick={() => setIsSignUp(true)} >Get Started</button>
                       </form>
                   </div>
                </>
                )}
            </div>
        </div>
    )
}

export default LoginScreen
