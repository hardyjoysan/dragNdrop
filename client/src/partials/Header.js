function Header() {
    return(
        <nav className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0 shadow-md">
            <div className="flex flex-wrap items-center">
                <div className="block w-full justify-center md:justify-start text-white">
                    <h1 className="p-2 font-bold text-center md:text-2xl sm:text-lg text-blue-100">Expense Dashboard</h1>
                </div>
            </div>
        </nav>
    )
}

export default Header;