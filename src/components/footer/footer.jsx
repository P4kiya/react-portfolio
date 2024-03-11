import React from 'react'
import './footer.css'

const footer = () => {
    return(
        <footer className='flex'>
            <ul className='flex'>
                <li><a href="">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Speaking</a></li>
                <li><a href="">Users</a></li>
            </ul>

            <p>© 2024 Othmane Aitsalah. All rights reserved.</p>
        </footer>
    )
}

export default footer;


