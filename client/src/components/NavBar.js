import React from 'react'
import {useNavigate} from 'react-router-dom'

const NavBar = () => {

    const navigate = useNavigate()
    const handleUsers = () => {
        navigate('/users')
    }

    const handleHome = () => {
      navigate('/')
    }

    const handlePlay = () => {
        navigate('/blackjack')
      }

    return (
        <div class = 'bg-gray-900 '>
            <ul class='flex justify-evenly'>
                <li>
                    <p onClick={handleHome} class ='text-fuchsia-500 cursive text-xl hover:text-white cursor-pointer'>Home</p>
                </li>
                <li>
                    <p onClick={handlePlay} class ='text-fuchsia-500 cursive text-xl hover:text-white cursor-pointer'>Play</p>
                </li>
                <li>
                    <p onClick={handleUsers} class ='text-fuchsia-500 cursive text-xl hover:text-white cursor-pointer'>Stats</p>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;