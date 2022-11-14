import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

// eslint-disable-next-line no-unused-vars
export default function NavBar({ showModal, setShowModal }) {
  const navMenu = useRef(null);
  const [navbar, setNavbar] = useState(false);
  const closeOpenMenus = (e) => {
    if (navMenu.current && navbar && !navMenu.current.contains(e.target)) {
      setNavbar(false);
    }
  };
  document.addEventListener("mousedown", closeOpenMenus);
  function handleClick() {
    setShowModal(true);
    setNavbar(false);
  }

  return (
    <nav
      ref={navMenu}
      className=" lg:mt-[43px] mt-[15px] xl:mx-[100px] lg:mx-[68px] md:mx-[50px] sm:mx-[20px] mx-[10px]"
    >
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
            <ul className="bg- lg:bg-inherit items-center xl:gap-12 justify-center space-y-5 lg:flex lg:space-x-6 lg:space-y-0">
              <li className="leading-[25px]">
                <NavLink
                  to="/"
                  reloadDocument
                  className={({ isActive }) =>
                    isActive
                      ? " flex items-center text-[#a02279] font-bold"
                      : "hover:text-[#a02279] flex items-center"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="leading-[25px]">
                <NavLink
                  reloadDocument
                  to="/place-to-stay"
                  className={({ isActive }) =>
                    isActive
                      ? " flex items-center text-[#a02279] font-bold"
                      : "hover:text-[#a02279] flex items-center"
                  }
                >
                  Place to stay
                </NavLink>
              </li>
              <li className="leading-[25px]">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? " flex items-center "
                      : "hover:text-[#a02279] flex items-center pointer-events-none"
                  }
                >
                  NFTs
                </NavLink>
              </li>
              <li className="leading-[25px]">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? " flex items-center"
                      : "hover:text-[#a02279] flex items-center pointer-events-none"
                  }
                >
                  Community
                </NavLink>
              </li>
            </ul>

            <div className="mt-5 space-y-2 lg:hidden lg:inline-block">
              <button
                type="submit"
                className="btn-gradient h-12 w-full rounded-[10px] inline-block text-white w-full px-4 py-2 text-center rounded-md leading-5"
                onClick={handleClick}
              >
                Connect wallet
              </button>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 lg:inline-block">
          <button
            type="submit"
            className="btn-gradient h-12 w-[170px] rounded-[10px] px-4  py-2 text-white rounded-md leading-5"
            onClick={() => setShowModal(true)}
          >
            Connect wallet
          </button>
        </div>
      </div>
    </nav>
  );
}
