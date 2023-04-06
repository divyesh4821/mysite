import React from 'react'
import { Link } from 'react-router-dom'
import '../Assets/Components/Main.scss'
function Header() {
    return (
        <>
            <main>
                <header>
                    <h2>welcome to developer world</h2>
                    <nav>
                        <Link to='/'>Home</Link>
                        <Link to='/'>Portfolio</Link>
                        <Link to='/'>About</Link>
                        <Link to='/'>Contact me</Link>
                    </nav>
                </header>
            </main>
        </>
    )
}

export default Header