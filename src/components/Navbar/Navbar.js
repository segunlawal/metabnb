import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className=" lg:mt-[43px] mt-[15px] xl:mx-[100px] lg:mx-[68px] md:mx-[50px] sm:mx-[20px] mx-[10px]">
      <div className="justify-between mx-auto lg:items-center lg:flex">
        <div>
          <div className="flex items-center justify-between lg:block">
            <NavLink to="/">
              <img
                src={logo}
                alt="Metabnb"
                className="sm:w-[223px] w-[170px]"
              />
            </NavLink>
            <div className="lg:hidden">
              <button
                type="submit"
                className="p-2 rounded-md outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-9 h-9 text-white"
                    viewBox="0 0 20 20"
                    fill="#434343"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-9 h-9 text-white"
                    fill="black"
                    viewBox="0 0 24 24"
                    stroke="#434343"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 lg:block md:pb-0 lg:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center xl:gap-12 justify-center space-y-5 lg:flex lg:space-x-6 lg:space-y-0">
              <li className="leading-[25px]">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="leading-[25px]">
                <NavLink to="/place-to-stay">Place to stay</NavLink>
              </li>
              <li className="leading-[25px]">
                <NavLink to="/">NFTs</NavLink>
              </li>
              <li className="leading-[25px]">
                <NavLink to="/">Community</NavLink>
              </li>
            </ul>

            <div className="mt-5 space-y-2 lg:hidden lg:inline-block">
              <button
                type="submit"
                className="btn-gradient h-12 w-[170px] rounded-[10px]"
              >
                <a
                  href="/"
                  className="inline-block text-white w-full px-4 py-2 text-center rounded-md leading-5"
                >
                  Connect wallet
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 lg:inline-block">
          <button
            type="submit"
            className="btn-gradient h-12 w-[170px] rounded-[10px]"
          >
            <a href="/" className="px-4  py-2 text-white rounded-md leading-5">
              Connect wallet
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
}
