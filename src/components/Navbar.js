import React from 'react';
import Logo from '../assets/logo.png';
import Button from './Button';

const Navbar = () => {
    return (
        <header className='lg:py-8 lg:px-40 py-4 px-10 lg:pr-14 pr-5 absolute z-20 w-full'>
            <nav className='flex lg:justify-between justify-end'>
                <a href="/" className='hidden lg:block'>
                    <img src={Logo} alt="Logo" width={130} height={29} />
                </a>
                <div className='relative'>
                    <Button
                        text='Get In Touch'
                        textColor='white'
                    />
                </div>
            </nav>
        </header>
    );
}

export default Navbar;