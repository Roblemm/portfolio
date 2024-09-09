import React from 'react';
import './styles/App.css';


// Import react-router-dom for routing
import { HashRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';

// Import the pages
import Home from './pages/Home';
import Business from './pages/Business';
import Development from './pages/Development';

// Get Tailwind Components
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Development', href: '/development', current: false },
  { name: 'Business', href: '/business', current: false },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

function NavBar() {
  const location = useLocation(); // useLocation needs to be inside a Router

  return (
    <Disclosure as="nav" className="bg-sky-950">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink- items-center">
              <img
                alt="ItsJath"
                src={`${process.env.PUBLIC_URL}/BigPP.png`}
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block items-center">
              <div className="flex space-x-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={location.pathname.toLowerCase() === item.href ? 'page' : undefined}
                    className={classNames(
                      location.pathname.toLowerCase() === item.href
                        ? 'bg-sky-900 text-white'
                        : 'text-gray-300 hover:bg-sky-800 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}

function App() {

  return (
    <Router>
      <NavBar></NavBar>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/development" element={<Development />} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
