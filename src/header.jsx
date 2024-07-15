import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-zinc-950 fixed w-screen top-0 left-0 text-white p-5 z-50">
      <nav className="flex justify-between max-w-[70rem] mx-auto text-lg px-5 items-center">
        <span>Library</span>
        <button
          className="sm:hidden space-y-1.5 hover:bg-slate-600 p-1 transition-all duration-300"
          onClick={() => setIsOpen(true)}
        >
          <span className="w-7 h-1 bg-white block"></span>
          <span className="w-7 h-1 bg-white block"></span>
          <span className="w-7 h-1 bg-white block"></span>
        </button>
        <ul
          className={`gap-6 ${
            isOpen
              ? "opacity-100 translate-x-0 visible"
              : "opacity-0 translate-x-full invisible"
          } sm:flex absolute top-0 bg-zinc-950 left-0 w-screen h-screen z-50 flex-col justify-center items-center text-3xl gap-16 sm:gap-10 transition-all duration-500 flex sm:visible sm:opacity-100 sm:w-auto sm:h-auto sm:translate-x-0 sm:static sm:flex-row sm:text-lg`}
        >
          <li className=" absolute top-6 right-10 text-lg sm:hidden hover:bg-slate-600 transition-all">
            <button onClick={() => setIsOpen(false)}>❌</button>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-yellow-500 transition-all duration-300 hover:bg-zinc-900 block w-screen sm:w-auto sm:inline sm:hover:bg-transparent text-center p-3"
            >
              Home
            </Link>
          </li>
          <Link to="/about">
            <a
              href="#"
              className="hover:text-yellow-500 transition-all duration-300 hover:bg-zinc-900 block w-screen sm:w-auto sm:inline sm:hover:bg-transparent text-center p-3"
            >
              About us
            </a>
          </Link>
          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-500 transition-all duration-300 hover:bg-zinc-900 block w-screen sm:w-auto sm:inline sm:hover:bg-transparent text-center p-3"
            >
              Contact us
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className={`${
                sessionStorage.getItem("login")
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-500 hover:bg-green-600"
              } px-4 py-2 rounded  transition-all duration-300 text-white`}
              onClick={() => {
                sessionStorage.clear();
              }}
            >
              {sessionStorage.getItem("login") ? "Logout" : "Signup"}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
