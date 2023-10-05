import React from 'react'
import {useNavigate} from 'react-router-dom'

const NavBar = () => {

    const navigate = useNavigate()
    const handleUsers = () => {
        navigate('/users')
    }
    return (
        <div class = 'bg-black'>
            <ul className='navBarUL'>
                <li>

                    <a href='/'>Home</a>
                </li>
                <li className='userStatLink'>
                    <p onClick={handleUsers}>User Stats</p>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;