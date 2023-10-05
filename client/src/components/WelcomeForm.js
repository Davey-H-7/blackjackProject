import React, {useState} from 'react';
import {getUser, addUser, updateUser} from './UserService'
import { useNavigate } from "react-router-dom";




const WelcomeForm = ({setNewUser}) => {

    const[name, setName] = useState('');

    const navigate = useNavigate();

    const handleNameChange = (event) => setName(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        // addUser({
        //     name: name,
        // })
        setNewUser({name: name})
        setName('');
    }

    const handleGameStart = () => {
        navigate("/blackjack")
    }


    const handleClick = (event) => {
        event.preventDefault();
        window.location.href = 'http://localhost:3000/blackjack';
    }
return(
        <>

        <form onSubmit={handleSubmit}>
        <h4 className = 'text-3xl font-bold underline'> Please enter your username: </h4>
        <label htmlFor='name'></label>
        <input type='text' id='name' name='name' value={name} require onChange={handleNameChange}/>
        <input type='submit' name='submit' value='Save'/>
        </form>

        <h3 className='warningText'> Please note: this is a cash only casino. </h3>
        
        <div className='startButton'>
            <form onSubmit={handleGameStart}>
                <input type='submit' value='Start Game'/>
            </form>
        </div>

     
        </>
    )
};
 
export default WelcomeForm;