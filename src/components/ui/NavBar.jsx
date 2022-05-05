import { useContext, useState } from "react";
import { Transition } from "@headlessui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { Types } from "../../types/types";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext);

  const handleLogout = ()=>{
    const logAuthAction = {
      type: Types.logout
    }

    dispatch(logAuthAction);

    navigate('/login',{
      replace: true
    })
  }

  const {user} = useContext(AuthContext);

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 w-full">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink
                    to="/heroes/marvel"
                    className={({isActive}) =>`hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium ${isActive && 'bg-gray-700'}`}
                  >
                    Marvel
                  </NavLink>
                  
                  <NavLink
                    to="/heroes/dc"
                    className={({isActive}) =>`hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium ${isActive && 'bg-gray-700'}`}
                  >
                    DC
                  </NavLink>
                  
                  <NavLink
                    to="/heroes/search"
                    className={({isActive}) =>`hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium ${isActive && 'bg-gray-700'}`}
                  >
                    Search
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="flex">
            <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">                  
                  <div className="block">
                    <span className="text-violet-500">
                      {user.name}
                    </span>

                    <button
                      className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  
                  </div>

                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <span className="text-violet-500 flex items-center mr-2">
                {user.name}
              </span>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {() => (
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink
                to="/heroes/marvel"
                className={({isActive}) => isActive ? 'bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium' : 'hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'}
              >
                Marvel
              </NavLink>
              
              <NavLink
                to="/heroes/dc"
                className={({isActive}) => isActive ? 'bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium' : 'hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'}
              >
                DC
              </NavLink>

              <NavLink
                to="/heroes/search"
                className={({isActive}) => isActive ? 'bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium' : 'hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'}
              >
                Search
              </NavLink>
              
              <button
                className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={handleLogout}
              >
                Logout
              </button>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}