import React from 'react'
import { FaEarlybirds } from "react-icons/fa"

const HeroHeader = () => {
    return (
        <div className=' '>
            
    <header className=''>
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-semibold text-gray-700">
                            <a className="flex items-center gap-2 text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Obnoxious Brand Image <FaEarlybirds className='text-4xl text-white'/></a>
                        </div>

                        {/* <!-- Mobile menu button --> */}
                        <div className="flex lg:hidden">
                            <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                    <div className="hidden -mx-4 lg:flex lg:items-center">
                        <a href="#" className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Web developers</a>
                        <a href="#" className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Web Designers</a>
                        <a href="#" className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">UI/UX Designers</a>
                        <a href="#" className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
                    </div>
                </div>
            </div>
        </nav>

        <div className="w-full bg-center bg-cover h-[32rem] lg:h-[100rem] bg-hero-header" >
            <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                <div className="text-center">
                    <h1 className=" flex items-center text-2xl font-semibold text-white uppercase lg:text-3xl gap-2">Obnoxiously Large Header Image <span className="text-blue-400 underline">With Complimentary Icon</span> <FaEarlybirds className='text-7xl text-white'/></h1>
                    <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start project</button>
                </div>
            </div>
        </div>
    </header>
        </div>
    )
}

export default HeroHeader
