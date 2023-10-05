import React from 'react';
import WelcomeForm from './WelcomeForm';
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Satisfy&display=swap" rel="stylesheet" />

const Welcome = ({setNewUser}) => {

    return ( 
        <div class = 'py-10 flex flex-col justify-center items-center w-50% rounded-[20px] max-w-50% mx-auto'>
            <h1 class="cursive text-6xl font-thin text-fuchsia-600 my-8">Blackjack City</h1>
            <div>
                <WelcomeForm setNewUser={setNewUser}/>
            </div>
            <h3 className='cursive text-2xl font-thin text-fuchsia-600 my-8'> Cash only</h3>
        </div>
     );
}
 
export default Welcome;