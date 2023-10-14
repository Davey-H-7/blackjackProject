import React from 'react';
import User from './User';



const Users = ({allUsers, user}) => {

    const filteredUsers = []
    for(let player of allUsers){
        console.log("user.name", user.name);
        console.log("player.name", player.name);

        if (player.name === user.name){
            filteredUsers.push(player)
        }
    }

    const userElements = filteredUsers.map((user) => {
        return <p>{user.Result}</p>
    })


    return(
        <div class = 'bg-green-800 px-10 py-5 flex flex-col justify-center items-center w-1/2 rounded-[20px] max-w-50% m-auto border-solid border-2 border-white-500'>
            <h2 class ='text-white text-3xl'>Player:</h2>
            <h2 class ='text-white text-3xl'>{user.name}</h2>
            <h3 class='text-white text-2xl'> Recent Game Records:</h3>
            {userElements.slice(0,20)}
        </div>

    )
}

export default Users;