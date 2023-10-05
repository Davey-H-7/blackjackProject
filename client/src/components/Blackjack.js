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

        <div class = 'bg-green-800 px-10 py-10 flex flex-col justify-center items-center w-50% rounded-[20px] max-w-50% m-auto border-solid'>
            <div class>
                <Instructions/>
                <button className="bjBtns" onClick={handleDeal} disabled = {!buttons}>Deal </button>
                <button className="bjBtns" onClick={handleStick} disabled = {buttons}>Stick</button>
                <button className="bjBtns" onClick={handleTwist} disabled = {buttons} >Twist</button>
            </div>

            <div className='gameTableDiv'>
                <div className='playerDiv'>
                    <h1><u>{user.name}</u></h1>
                    {playerNode}
                </div>

                <div className='dealerDiv'> 
                    <h1><u>Dealer</u></h1>
                    {dealerNode}
                </div>

                <div className='resultDiv'>
                   <h1> Result: {result} </h1>
                </div>
            </div>
        </div>
     );
}
export default Blackjack;