import { FaUserCircle } from "react-icons/fa"

const Header = () => {
    const isLoggedIn = true
    return (

        <nav className="bg-white py-4 px-6 border-b border-gray-200 fixed top-0 w-full z-10">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-2xl font-bold text-neutral-800 tracking-tight">P2PShare</div>
                <div className="space-x-6 text-sm flex items-center">
                    <a href="/" className="text-neutral-700 hover:text-indigo-600 transition">Home</a>
                    <a href="#" className="text-neutral-700 hover:text-indigo-600 transition">About</a>
                    <a href="#" className="text-neutral-700 hover:text-indigo-600 transition">Contact</a>
                    {isLoggedIn ? (
                        <FaUserCircle size={32} color="#4F46E5" />
                    ) : (
                        <a
                            href="#"
                            className="inline-block rounded-md bg-indigo-600 text-white px-4 py-1.5 text-sm font-medium hover:bg-indigo-500 transition"
                        >
                            Sign in
                        </a>
                    )}
                </div>
            </div>
        </nav>
    )
}
export default Header