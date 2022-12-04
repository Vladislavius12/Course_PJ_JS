import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import List from './List';


const Registration = () => { 
    const [button, setButton] = useState('Sign UP')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email hasnt be empty')
    const [passwordError, setPasswordError] = useState('Password hasnt be empty')
    const [formValid, setFormValid] = useState(false)

    const SaveData = (e) => {
        e.preventDefault();
        setButton('You are Added to list')
        setFormValid(false)   

    }

    useEffect(() =>{
        if (emailError || passwordError){
            setFormValid(false)    
        }else{
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Uncorrect email')    
        } else{
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 5 || e.target.value.length > 10){
          setPasswordError('The password must be no shorter than 5 and no more than 10 characters')
          if(!e.target.value)  {
            setPasswordError('Password hasnt be empty')
          }
        }else{
            setPasswordError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name){
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break    
        }
    }
    
    return(
      <div className='app'>
        <form onSubmit={SaveData}>
            <div className="ml-10">
                {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
                <input class="shadow appearance-none border border-red-500 rounded py-2 px-3 text-gray-700
                 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type="text" placeholder='Enter your email'/>
            </div>
            <div className="ml-10">
                {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
                <input class="shadow appearance-none border border-red-500 rounded py-2 px-3 text-gray-700
                 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type="password" placeholder='Enter your password'/>
            </div>
                <div class="md:w-1/3 ml-10">
                    <label class="md:w-2/3 block text-gray-500 font-bold">
                        <input class="mr-2 leading-tight" type="checkbox"/>
                        <span class="text-sm">
                        Send me your newsletter!
                        </span>
                    </label>
                </div>
            <button disabled={!formValid} type="submit" className="py-4 px-6 bg-blue-gradient 
            font-poppins font-medium text-[18px] text-primary 
            outline-none ${styles} rounded-[10px] ml-10 my-5">{ button }</button>
            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 ml-2" href="#">
            Forgot Password?
            </a>
        </form>
        
        <div>
            <List mail={email} pass={password}/>
        </div>

      </div>      
    );
    
};
export default Registration;