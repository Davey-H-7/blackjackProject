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
        <div class = 'bg-green-800 px-10 py-10 flex flex-col justify-center items-center w-50% rounded-[20px] max-w-50% m-auto border-solid'>

   
        <form  onSubmit={handleSubmit} class='flex flex-col justify-center items-center'>
        <h4 className = 'text-2xl font-bold text-white my-5'>Enter your username: </h4>
        <label htmlFor='name'></label>
        <input type='text' id='name' name='name' value={name} require onChange={handleNameChange} class ='mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white p-3 text-sm outline-none border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400'/>
        <input type='submit' name='submit' value='Save' className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full my-5 w-1/2"/>
        </form>
        <button onClick={handleGameStart} class ='bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full'>Start Game</button>
    
        </div>
    )
};
 
export default WelcomeForm;