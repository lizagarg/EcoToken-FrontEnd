import React from 'react'
import { useState } from 'react';
import './sign.css'
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword,  } from "firebase/auth";
import { getDatabase,ref, set } from "firebase/database";



const Sign = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Select an option');
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const selectOption = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
    };

    const Dropdown = () => {
        const [isOpen, setIsOpen] = useState(false);
        const [selectedOption, setSelectedOption] = useState('Select an option');
      
        const toggleDropdown = () => {
          setIsOpen(!isOpen);
        };
      
        const selectOption = (option) => {
          setSelectedOption(option);
          setIsOpen(false);
        };
      }

const signInUser= async()=>{
    if(selectedOption!='Select an option'){
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => { 
            const user = userCredential.user;
            const database = getDatabase();
            set(ref(database, 'users/' + user.uid), {
                email: email,
                type: selectedOption,
              });
            // ...
            alert(`User registered successfully with ${selectedOption}`);
    
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
          });
    }
    else{
        alert('Enter the type')
    }
   
}

    return(
        <div className='cover'>
            
            <h1>Sign Up</h1>

            <div className={`dropdown ${isOpen ? 'open' : ''}`}>
          <button className="dropbtn" onClick={toggleDropdown}>
            <span id="selectedOption">{selectedOption}</span> ▼
            </button>
          <div className="dropdown-content">
            <a href="#" onClick={() => selectOption('Government')}>Government</a>
            <a href="#" onClick={() => selectOption('Industry')}>Industry</a>
            <a href="#" onClick={() => selectOption('Clean Energy Producers')}>Clean Energy Producers</a>
          </div>
        </div>
            <input 
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            placeholder='email'>
            </input>
            
            <input type='password' 
            placeholder='Password' 
            onChange={(e) => setPassword(e.target.value)}>
            </input>

            <button 
            onClick={signInUser}
            className='login-btn'>SIGN UP</button>
            
            <div className="display: flex; align-items: center"><span className='"margin-right: 10px;"'>Already existing user </span> 
            <button className='add-btn'><Link to="/login">LOGIN</Link></button>
            </div>
            
        </div>
    )
}
export default Sign;