import { NavLink } from 'react-router';

const Nav = () => {
  return (
    <header className='w-full px-8 lg:px-24 xl:px-48 text-gray-700 bg-white shadow-sm'>
      <div className='container flex items-center justify-between py-8 '>
        <div className='w-full flex flex-col md:flex-row items-center justify-between'>
          <NavLink to='/' className='flex items-center mb-5 md:mb-0'>
            <span className='text-3xl font-black text-gray-900 select-none'>
              REST<span className='text-indigo-600 ml-1'>Explorer</span>
            </span>
          </NavLink>
          <nav className='flex gap-4 flex-wrap items-center text-lg font-semibold'>
            <NavLink
              to='/'
              end
              className='mr-5 font-medium text-gray-600 hover:text-gray-900'
            >
              Home
            </NavLink>
            <NavLink
              to='/countries'
              className='mr-5 font-medium text-gray-600 hover:text-gray-900'
            >
              Countries
            </NavLink>
            <NavLink
              to='/about'
              className='mr-5 font-medium text-gray-600 hover:text-gray-900'
            >
              About
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Nav
