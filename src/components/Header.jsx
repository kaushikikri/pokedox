import Logo from "../assets/pokeball.png";

import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"

export const Header = () => {
    const navigate = useNavigate();

    const active = "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
    const inactive = "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

    const [shownav, setShownav] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.search.value;
        event.target.search.value = "";
        navigate(`/pokemon/${name}`)
        setShownav(!shownav);
    }
    return (
        <header>

            <nav className="bg-white shadow-lg border-gray-200 dark:bg-gray-900">

                <div className=" flex flex-wrap items-center justify-between mx-auto p-4">

                    <Link to="/" className="flex items-center">
                        <img src={Logo} className="h-10 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">Pokedox</span>
                    </Link>

                    <div className="flex md:order-2">

                        <div className="relative md:block hidden">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <input name="search" type="text" id="search-navbar" className="block w-80 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." autoComplete="off" />
                            </form>
                        </div>

                        <button onClick={() => setShownav(!shownav)} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                            <span className="sr-only">Open menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>

                    <div className={`items-center justify-between ${shownav ? "" : "hidden"} w-full md:flex md:w-auto md:order-1`} id="navbar-search">

                        <div className="relative mt-3 md:hidden">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <input type="text" name="search" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." autoComplete="off" />
                            </form>
                        </div>

                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium text-3xl border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? active : inactive}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="bookmark" className={({ isActive }) => isActive ? active : inactive}>Bookmark</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>

        </header>
    )
}
