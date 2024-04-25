import { useState } from 'react';
import { MenuIcon } from 'assets/svgs';
import { ThemeToggle } from 'components';
import { routes, strings } from 'constants';
import { MenuItem, ProfileMenu } from 'pages';
import { useLocation } from 'react-router-dom';

/**
 * Navigation bar component for the application.
 */
export const NavBar = () => {
  // Constants for string literals
  const {
    common,
    primary: { home, common: homeCommon },
  } = strings;

  // Returns the current location object, which represents the current URL in web browsers.
  const location = useLocation();

  // State for controlling the visibility of the menu
  const [menuVisible, setMenuVisible] = useState(false);

  /** Function to toggle the visibility of the menu */
  const toggleMenu = () => setMenuVisible((prev) => !prev);

  /** Renders the header section of the navigation bar */
  const renderHeader = () => (
    <a href={routes.root} className='flex items-center space-x-3 rtl:space-x-reverse'>
      <img src='/logo.svg' className='size-8 h-8 md:size-10' alt='App logo' />
      <span className='self-center whitespace-nowrap text-xl font-semibold text-color md:text-2xl dark:text-color-dark'>
        {common.appName}
      </span>
    </a>
  );

  /** Renders the menu button */
  const renderMenuButton = () => (
    <button
      data-collapse-toggle='navbar-default'
      type='button'
      className='group inline-flex size-8 items-center justify-center rounded-lg p-1 text-sm text-light focus:outline-none focus:ring-2 focus:ring-border md:hidden md:size-10 md:p-2 dark:text-light-dark dark:focus:ring-border-dark'
      aria-controls='navbar-default'
      aria-expanded='false'
      onClick={toggleMenu}
    >
      <MenuIcon className='h-5 w-5 fill-light group-hover:fill-color dark:fill-light-dark dark:group-hover:fill-color-dark' />
    </button>
  );

  /** Renders the menu items */
  const renderMenu = () => (
    <div
      className={`${menuVisible ? 'block' : 'hidden'} w-full md:block md:w-auto`}
      id='navbar-default'
    >
      <ul className='mt-4 flex flex-col rounded-lg border border-border bg-secondary p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-background md:p-0 rtl:space-x-reverse dark:border-border-dark dark:bg-secondary-dark md:dark:bg-background-dark'>
        <MenuItem href={routes.root}>{home.title}</MenuItem>
        <MenuItem href={routes.termsCondition}>{homeCommon.termsOfUse}</MenuItem>
        <MenuItem href={routes.privacyPolicy}>{homeCommon.privacyPolicy}</MenuItem>
      </ul>
    </div>
  );

  return (
    <nav
      className={`${location.pathname === '/' ? '' : 'sticky'} start-0 top-0 z-20 w-full border-b border-border bg-background shadow dark:border-border-dark dark:bg-background-dark`}
    >
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-2 md:p-4'>
        {renderHeader()}
        <div className='flex items-center space-x-2 md:order-2 md:space-x-3 rtl:space-x-reverse'>
          <ThemeToggle />
          <ProfileMenu />
          {renderMenuButton()}
        </div>
        {renderMenu()}
      </div>
    </nav>
  );
};
