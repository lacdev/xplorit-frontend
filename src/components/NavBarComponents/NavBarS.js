import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Btncards from 'components/Common/Btncards'


const classes={
    navbase:'font-primary fixed bg-none w-full z-10 shadow',
    parentcon:'max-w-7xl mx-auto px-2 sm:px-6 lg:px-8',
    parentmovile:'absolute inset-y-0 left-0 flex items-center sm:hidden',
    movilebtn:'inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary',
    movileicons:'block h-6 w-6',
    logolinks:'flex-1 flex items-center justify-center sm:items-stretch sm:justify-start',
    logocon:'flex-shrink-0 flex items-center',
    linkscon:'hidden sm:ml-6 sm:flex sm:space-x-8',
    beforeScroll : 'font-primary fixed bg-none w-full z-10 shadow z-10',
  afterScroll : 'font-primary fixed bg-none w-full z-10 shadow bg-white z-10 shadow',
  textBefore: 'items-center px-1 pt-1 border-b-2 text-xl font-semibold text-white',
  textAfter: 'items-center px-1 pt-1 border-b-2 text-xl font-semibold text-black'

}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
function NavBarS() {
    const [navBarColor, setNavBarColor] = useState(classes.beforeScroll)
    const [navBarText, setNavBarText] = useState(classes.textBefore)
    const isxPhone = useMediaQuery({query:'(min-width: 360px)'});
    const isPhone = useMediaQuery({query:'(min-width: 640px)'});
    const isMinTablet = useMediaQuery({query:'(min-width: 768px)'});
    const isTablet = useMediaQuery({query:'(min-width: 1024px)'});
    const isDesktop = useMediaQuery({query:'(min-width: 1280px)'});
    const isBigDesktop = useMediaQuery({query:'(min-width: 1536)'});
    
    const TypeWindow =[isxPhone, isPhone, isMinTablet, isTablet, isDesktop ,isBigDesktop ];
    useEffect(() => {
        TypeWindow.forEach((size) => {
            size.addEventListener("scroll", listenScrollEvent)
         console.log(size)
      return () => {
        size.removeEventListener('scroll')
         console.log(size)
        }
     });
        
    }, [])
  
    const listenScrollEvent = (event) => {
      if (window.scrollY > 500) {
        setNavBarColor(classes.afterScroll)
        setNavBarText(classes.textAfter)
      } else {
        setNavBarColor(classes.beforeScroll)
        setNavBarText(classes.textBefore)
      }
    }
  return (
    <Disclosure as="nav" className="font-primary fixed bg-none w-full z-10 shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                 
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-secondary text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link
                    to='#'
                    className="border-secondary text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-xl font-semibold"
                  >
                    Home
                  </Link>
                  <Link
                    to='#'
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-xl font-semibold"
                  >
                    Rutas
                  </Link>
                  <Link
                    to='#'
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-xl font-semibold"
                  >
                    Lugares
                  </Link>
                  <Link
                   to='#'
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-xl font-semibold"
                  >
                    Acerca de 
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <div className="hidden sm:block flex-shrink-0">
                   <Btncards className='relative inline-flex items-center px-4 py-2' buttonText="Iniciar sesión"></Btncards>
                </div>
                <div className="md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                  

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
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
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                               to='#'
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Perfil
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                               to='#'
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Configuración
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                               to='#'
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Cerrar sesión
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
            </div>
          </div>
        </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {/* Current: "bg-blue-200 border-secondary text-black", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-200 hover:text-gray-700" */}
              <Link
                to='#'
                className="bg-blue-200 border-secondary text-black block pl-3 pr-4 py-2 border-l-4 text-base font-semibold"
              >
                Home
              </Link>
              <Link
                to='#'
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-semibold"
              >
                Rutas
              </Link>
              <Link
               to='#'
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-semibold"
              >
                Lugares
              </Link>
              <Link
               to='#'
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-semibold"
              >
                Acerca de
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavBarS