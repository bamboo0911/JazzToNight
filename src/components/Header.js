import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Header() {
  return (
    <header className="bg-primary text-textPrimary p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-md">
      <h1 className="text-2xl font-bold text-accent text-center flex-1 sm:flex-none">Jazz To Night</h1>
      <nav className="hidden sm:flex">
        <Link className="mx-2 hover:text-accent" to="/">今晚的演出</Link>
        <Link className="mx-2 hover:text-accent" to="/venues">展演場所</Link>
        <Link className="mx-2 hover:text-accent" to="/musicians">樂手</Link>
        <Link className="mx-2 hover:text-accent" to="/articles">文章</Link>
      </nav>
      <div className="sm:hidden">
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button className="text-textPrimary focus:outline-none z-50">
                {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
              </Menu.Button>
              {open && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300" />
              )}
              <Transition
                show={open}
                enter="transition ease-out duration-300"
                enterFrom="transform -translate-y-full opacity-0"
                enterTo="transform translate-y-0 opacity-100"
                leave="transition ease-in duration-300"
                leaveFrom="transform translate-y-0 opacity-100"
                leaveTo="transform -translate-y-full opacity-0"
              >
                <Menu.Items className="fixed top-16 left-0 w-full max-h-1/3 bg-primary p-4 z-50 shadow-md">
                  <div className="p-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/"
                          className={`block py-2 px-4 rounded-md ${active ? 'bg-gray-700 text-accent' : 'text-textPrimary'}`}
                        >
                          今晚的演出
                        </Link>
                      )}
                    </Menu.Item>
                    <div className="border-b border-gray-700 my-2"></div>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/venues"
                          className={`block py-2 px-4 rounded-md ${active ? 'bg-gray-700 text-accent' : 'text-textPrimary'}`}
                        >
                          展演場所
                        </Link>
                      )}
                    </Menu.Item>
                    <div className="border-b border-gray-700 my-2"></div>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/musicians"
                          className={`block py-2 px-4 rounded-md ${active ? 'bg-gray-700 text-accent' : 'text-textPrimary'}`}
                        >
                          樂手
                        </Link>
                      )}
                    </Menu.Item>
                    <div className="border-b border-gray-700 my-2"></div>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/articles"
                          className={`block py-2 px-4 rounded-md ${active ? 'bg-gray-700 text-accent' : 'text-textPrimary'}`}
                        >
                          文章
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </header>
  );
}

export default Header;
