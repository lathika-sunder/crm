import React from 'react';
import "./entrystyle.css";
import LoginForm from '../../components/login/logincomp';
import { useState } from "react"
import ResetPassword from '../../components/password-reset/PasswordResetcomp';

export const Entrypage = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [formLoad,setformLoad]=useState('login');

  const handleOnChange = e =>
  {
    const {name,value}=e.target;

    switch(name){
      case 'email':
        setEmail(value)
      break
    
        case 'password':
          setPassword(value)
        break

      default:
        break
    }
    console.log(name,value);
  }


  const handleOnSubmit= e=>{
    e.preventDefault()

    if(!email || !password){
      return alert("Please Fill the Form!");
    }
    //To Do call api to submit the form
    console.log(email,password)
  }

  const handleOnResetSubmit = (e)=>{
    e.preventDefault()

    if(!email ){
      return alert("Please Enter E-mail");
    }
    //To Do call api to submit the form
    console.log(email)
  }
  const formSwitcher = (frmType) =>
  {
    setformLoad(frmType);
  }
  return (
    <div className='entry-page'>

      <div className="signin"> 

      {formLoad==='login' &&
        <LoginForm 
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        formSwitcher={formSwitcher}
        email={email}
        pass={password}>
        </LoginForm>}

        {formLoad==='reset' &&
        <ResetPassword
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnResetSubmit}
        formSwitcher={formSwitcher}
        email={email}>
        </ResetPassword>
        }

    </div>
</div>

  )
}

