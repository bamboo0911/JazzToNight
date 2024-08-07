import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Header() {
  return (
    <header className="bg-primary text-textPrimary p-4 flex justify-between items-center">
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
              <Menu.Button className="text-textPrimary focus:outline-none">
                {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-primary divide-y divide-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="p-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/"
                        className={`${
                          active ? 'bg-gray-700 text-accent' : 'text-textPrimary'
                        } group flex rounded-md items-center w-full p-2 text-sm`}
                      >
                        今晚的演出
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/venues"
                        className={`${
                          active ? 'bg-gray-700 text-accent' : 'text-textPrimary'
                        } group flex rounded-md items-center w-full p-2 text-sm`}
                      >
                        展演場所
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/musicians"
                        className={`${
                          active ? 'bg-gray-700 text-accent' : 'text-textPrimary'
                        } group flex rounded-md items-center w-full p-2 text-sm`}
                      >
                        樂手
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/articles"
                        className={`${
                          active ? 'bg-gray-700 text-accent' : 'text-textPrimary'
                        } group flex rounded-md items-center w-full p-2 text-sm`}
                      >
                        文章
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </>
          )}
        </Menu>
      </div>
    </header>
  );
}

export default Header;
