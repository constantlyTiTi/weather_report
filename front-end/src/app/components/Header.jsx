import React from "react";

const Header = ({children}) => {
    return (
        <header className='bg-white'>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>
                </div>

                <div className="flex lg:flex-1">     
                    <div className="relative">
                    <a href="#" className="text-lg font-semibold leading-6 text-gray-900">Weather</a>
                    </div>
                </div>

                <div className ='flex lg:flex-1'>
                {children}
                </div>
                
            </nav>
        </header>
    )
}

export default Header