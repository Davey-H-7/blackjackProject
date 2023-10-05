import React from 'react';
import Cards from './Cards';
import Instructions from './Instructions';

const Blackjack = ({playerHand, dealerHand, result, handleDeal, handleStick, handleTwist, buttons, user}) => {
    
    const playerNode = playerHand.map((card) => {
        return <Cards card={card}/>

    })
    const dealerNode = dealerHand.map((card) => {
        return <Cards card={card} />
    })
    
    return ( 

        <div class >
            <Instructions/>
            <div class = 'flex justify-evenly'>
                <button class ='bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-5 py-6  border rounded-full border-2' onClick={handleDeal} disabled = {!buttons}>Deal </button>
                <button class ='bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-6  border rounded-full border-2' onClick={handleStick} disabled = {buttons}>Stick</button>
                <button class ='bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold px-4 py-6  border rounded-full border-2' onClick={handleTwist} disabled = {buttons} >Twist</button>
            </div>

            <div className='flex flex-col justify-center w-4/5 m-auto'>
                <div class = 'bg-green-800 px-10 flex flex-col justify-center items-center rounded-[20px] w-full h-52 m-auto border-solid border-2 border-white-500 my-5'>
                    <h1 class='text-white  text-2xl font-bold'>{user.name}</h1>
                    <div class = 'flex justify-center'>
                        {playerNode}
                    </div>
                </div>

                
                <h1 class ='text-white text-2xl font-bold flex justify-center'> {result} </h1>
            

                <div class = 'bg-green-800 px-10 flex flex-col justify-center items-center rounded-[20px] w-full h-52 m-auto border-solid border-2 border-white my-5'>
                    <div class = 'flex justify-center'> 
                        {dealerNode}
                    </div>
                    <h1 class ='text-white text-2xl font-bold'>Dealer</h1>
                </div>

             
                </div>
        </div>
     );
}
export default Blackjack;