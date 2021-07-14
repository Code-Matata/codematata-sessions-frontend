/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition, Menu } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import CodeMatataLogo from "../resources/codematata.svg";

// const profile = ["Your Profile", "Settings", "Sign out"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ authenticated, currentUser, onLogout }) {
  return (
    <Popover className="fixed bg-white z-10 w-screen mb-20 px-4 md:px-16 md:mb-40">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="/">
                  <p className="sr-only">CodeMatata</p>
                  <object
                    className="h-8 w-auto sm:h-10"
                    data={CodeMatataLogo}
                    aria-label="codematata logo"
                  />
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <a
                  href="/dash"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Home
                </a>
                <a
                  href="/create-session"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Create a Session
                </a>
              </Popover.Group>
              {authenticated ? (
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <Menu as="div" className="ml-3 relative">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-9 w-9 rounded-full"
                              src={currentUser.imageUrl}
                              alt={currentUser.name}
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                            <Menu.Item className="flex flex-col items-center justify-center p-4 w-full">
                              {({ active }) => (
                                <>
                                  <p
                                    className={classNames(
                                      active ? "bg-gray-100 text-center" : "",
                                      "block px-4 py-2 text-sm text-gray-700 text-center"
                                    )}
                                  >
                                    {currentUser.name}
                                  </p>
                                  {/* <p
                                    className={classNames(
                                      active ? "bg-gray-100 text-center" : "",
                                      "block px-4 py-2 text-sm text-gray-700 text-center"
                                    )}
                                  >
                                    {currentUser.email}
                                  </p> */}
                                  <button
                                    className={classNames(
                                      active
                                        ? "bg-gray-900 w-9/12  text-center"
                                        : "",
                                      "block px-4 py-2 text-sm text-gray-700 w-9/12  text-center"
                                    )}
                                    onClick={onLogout}
                                  >
                                    Sign Out
                                  </button>
                                </>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>
              ) : (
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <a
                    href="/sign-in"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-900 hover:bg-indigo-800"
                  >
                    Sign in
                  </a>
                </div>
              )}
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src={CodeMatataLogo}
                        alt="codematata logo"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                    <a
                      href="/dash"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Home
                    </a>

                    <a
                      href="/create-session"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Create a Session
                    </a>
                  </div>
                  {authenticated ? (
                    <div className="pt-4 pb-3 border-t border-gray-700">
                      <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={currentUser.imageUrl}
                            alt={currentUser.name}
                          />
                        </div>
                        <div className="ml-3">
                          <div className="text-base font-medium leading-none text-white text-gray-900">
                            {currentUser.name}
                          </div>
                          <div className="text-sm font-medium leading-none text-gray-800">
                            {currentUser.email}
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 px-2 space-y-1">
                        <button
                          className="w-full flex items-center justify-center px-2 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-900 hover:bg-indigo-800"
                          onClick={onLogout}
                        >
                          Sign Out
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <a
                        href="/sign-in"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-900 hover:bg-indigo-800"
                      >
                        Sign in
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
