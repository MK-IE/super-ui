import { useState } from 'react';
import DropDown from '../ui/DropDown';
import './form.css';

const GetStarted = () => (
    <header id='get-started'>
        <h3 id='company-name'>😊 easyclass</h3>
        <h1 id='get-started-title'>Get started</h1>
        <h4 id='have-account'>
            Already have an account? <a href='#'>Sign In</a>
        </h4>
    </header>
);

const SignUp = () => {
    return (
        <section id='sign-up'>
            <GetStarted />
            <form style={{ display: 'flex', flexDirection: 'column', flex: 2 }}>
                <input
                    type='text'
                    id='name'
                    className='sign-up-input'
                    name='name'
                />
                <label className='sign-up-label' htmlFor='name'>
                    Name
                </label>
                <input
                    type='email'
                    id='email'
                    className='sign-up-input'
                    name='email'
                />
                <label className='sign-up-label' htmlFor='email'>
                    Email
                </label>
                    <DropDown
                        classes='sign-up-input'
                        options={['Country', 'Europe', 'USA', 'Ireland']}
                    />
                <button className='sign-up-button'>Sign Up</button>
            </form>
        </section>
    );
};

const Form = () => (
    <section id='form'>
        <SignUp />
        <div style={{ flex: 1.5 }}>Pictures</div>
    </section>
);

export default Form;
