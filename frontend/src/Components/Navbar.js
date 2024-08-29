import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [openSideBar,setOpenSideBar] = useState(false)
  const handleSideBar = () => {
    setOpenSideBar(!openSideBar);

  };
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div className='nav'>
      <div>
        {/* sidebar */}
        <div className={`hidden max-lg:flex justify-between absolute top-0 left-0 h-screen z-10 w-52 max-sm:w-40 bg-slate-600  text-white transform transition-transform duration-300  ${openSideBar ? '-translate-x-0' : '-translate-x-full'} `}>
        <ul className='w-full flex flex-col gap-4 mt-8 px-4'>
          <li> <NavLink to='/' exact className={({ isActive }) => ` ${isActive ? 'font-semibold' : ''}  ${darkMode ? 'duration-100 transition-transform' : 'hover:border-b-2 border-black duration-100 transition-transform'}`}>
            Home
          </NavLink></li>
    
          <li><NavLink to='/about' exact className={({ isActive }) => ` ${isActive ? 'font-semibold' : ''}  ${darkMode ? 'hover:border-b-2 border-white duration-100 transition-transform' : 'duration-100 transition-transform'}`}>
            About
          </NavLink></li>
          <li><NavLink to='/contact' exact className={({ isActive }) => ` ${isActive ? 'font-semibold' : ''}  'hover:border-b-2 border-white duration-100 `}>
            Contact
          </NavLink></li>
          <li> <NavLink to='/reservation' exact className={({ isActive }) => ` ${isActive ? 'font-semibold' : ''} 'duration-100 transition-transform'`}>
            Reservation
          </NavLink></li>
        </ul>
        <RxCross2 onClick={handleSideBar} />
      </div>
      <nav className='h-24 bg-slate-600 flex items-center justify-around font-semibold max-[680px]:justify-between max-[680px]:px-4'>
      <div className='hidden max-[680px]:block'>
        <RxHamburgerMenu onClick={handleSideBar}/>
      </div>
        <div>
          <img src='https://img.freepik.com/free-vector/vintage-restaurant-menu_23-2147491098.jpg' alt='error' className='h-24 rounded-full cursor-pointer max-[800px]:h-16 max-[680px]:mr-10'  />
        </div>
        <ul className='flex space-x-10 text-white max-[680px]:hidden'>
          <li>
            <NavLink to='/' exact className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white'}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white'}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white'}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to='/reservation' className={({ isActive }) => isActive ? 'text-yellow-400' : 'text-white'}>
              Reservation
            </NavLink>
          </li>
        </ul>
        <input type='text' placeholder='search' className='w-80 p-2 max-[800px]:w-56 max-[680px]:w-1/2'/>
      </nav>
    </div>
    </div>
  );
};

export default Navbar;
