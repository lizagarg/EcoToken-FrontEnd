import React from 'react'
import { useState } from 'react';
import './login.css'
import './sign.css'
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";



const Login = () => {
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
    


const logInUser= async()=>{
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const db = getDatabase();
        const starCountRef = ref(db, '/users/'+user.uid+'/type');
        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
          if(data==selectedOption){
            alert(`LogIn successful with ${selectedOption}`);
                if(data=='Government')
                window.open("\\government", "_blank");
                if(data=='Industry')
                window.open("\\industry", "_blank");
                if(data=='Clean Energy Producers')
                window.open("\\cleanEnergyProducers", "_blank");
          }

        else
        alert(`Please sign in with the correct option.`);
        });
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
}

    return(
        <div className='page'>
        <div className='cover'>
          
            <h1>Login</h1>

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
            onClick={logInUser}
            className='login-btn'>LOGIN</button>

            <div className="display: flex; align-items: center"><span className='"margin-right: 10px;"'>New user </span> 
            <button className='add-btn'><Link to="/">SIGN UP</Link></button>
            </div>
        </div>
        </div>
    )
}
export default Login;