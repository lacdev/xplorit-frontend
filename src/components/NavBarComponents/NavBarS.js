import { useEffect, useState, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useQuery } from "react-query";
import { getUserProfilePic } from "services/user.services";
//Plugins UI & HeroIcons
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
//Components
import Btncards from "components/Common/Btncards";
import { AuthContext } from "context/AuthContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBarS({ position = "sticky" }) {
  const classes = {
    beforeScroll: `font-primary fixed ${position} w-full z-10 bg-black backdrop-filter backdrop-blur-lg bg-opacity-30 shadow`,
    afterScroll: "font-primary fixed w-full z-10 shadow bg-white shadow",
    parentcon: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",
    positioncon: "relative flex justify-between h-16",
    parentmovile: "absolute inset-y-0 left-0 flex items-center sm:hidden",
    movilebtn:
      "inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary",
    movileicon: "block h-6 w-6",
    logolinks: "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",
    logocon: "flex-shrink-0 flex items-center",
    logoimg: "block h-8 w-auto",
    linkscon: "hidden sm:ml-6 sm:flex sm:space-x-8",
    rightcon: "flex items-center",
    btncon: "hidden md:block flex-shrink-0",
    btn: "relative inline-flex items-center px-4 py-2",
    rigthposition: "md:ml-4 md:flex-shrink-0 md:flex md:items-center",
    dropdowncon: "ml-3 relative",
    avatarcon:
      "bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary",
    avatarclass: "h-8 w-8 rounded-full",
    itemsdrop:
      "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
    movilemenu: "bg-white sm:hidden",
    menucon: "pt-2 pb-4 space-y-1",
    movilelinks:
      "active:bg-blue-200 active:border-secondary border-transparent text-black block pl-3 pr-4 py-2 border-l-4 text-base font-semibold",
    textBefore:
      "inline-flex items-center active:border-secondary border-transparent px-1 pt-1 border-b-2 text-xl font-semibold text-white",
    textAfter:
      "inline-flex items-center active:border-secondary border-transparent px-1 pt-1 border-b-2 text-xl font-semibold text-black",
    fillBefore: "block h-6 w-6 fill-white",
    fillAfter: "block h-6 w-6 fill-black",
  };

  const [navBarColor, setNavBarColor] = useState(classes.beforeScroll);
  const [navBarText, setNavBarText] = useState(classes.textBefore);
  const [navBarFill, setNavBarFill] = useState(classes.fillBefore);
  const { userState, setUserState } = useContext(AuthContext);
  const isxPhone = useMediaQuery({
    query: "(min-width: 360px) and (max-width: 639px)",
  });
  const isPhone = useMediaQuery({
    query: "(min-width: 640px) and (max-width: 767px)",
  });
  const isMinTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 1024px) and (max-width: 1279px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1280px) and (max-width: 1535px)",
  });
  const isBigDesktop = useMediaQuery({ query: "(min-width: 1536px)" });

  const getUser = useQuery(["getUserProfilePic"], getUserProfilePic);
  console.log(getUser);
  const { data, status } = getUser;

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const logOut = () => {
    console.log("Si cerraria la sesion");
    const newUserState = Object.assign({}, userState, {
      authToken: "",
      loggedIn: false,
    });
    setUserState(newUserState);
    localStorage.removeItem("token");
  };

  let scrollMax = 100;
  const listenScrollEvent = (event) => {
    if (isxPhone === true || isPhone === true) scrollMax = 200;
    else if (isMinTablet === true || isTablet === true) scrollMax = 500;
    else if (isDesktop === true || isBigDesktop === true) scrollMax = 900;

    if (window.scrollY > scrollMax) {
      setNavBarColor(classes.afterScroll);
      setNavBarText(classes.textAfter);
      setNavBarFill(classes.fillAfter);
    } else {
      setNavBarColor(classes.beforeScroll);
      setNavBarText(classes.textBefore);
      setNavBarFill(classes.fillBefore);
    }
  };

  return (
    <Disclosure as="nav" className={navBarColor}>
      {({ open }) => (
        <>
          <div className={classes.parentcon}>
            <div className={classes.positioncon}>
              <div className={classes.parentmovile}>
                {/* Mobile menu button */}
                <Disclosure.Button className={classes.movilebtn}>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className={classes.movileicon} aria-hidden="true" />
                  ) : (
                    <MenuIcon className={navBarFill} aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className={classes.logolinks}>
                <div className={classes.logocon}>
                  <img
                    className={classes.logoimg}
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className={classes.linkscon}>
                  {/* Current: "border-secondary text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link to="/" className={navBarText}>
                    Home
                  </Link>
                  <Link to="/routes" className={navBarText}>
                    Rutas
                  </Link>
                  <Link to="/places" className={navBarText}>
                    Lugares
                  </Link>
                  <Link to="/about" className={navBarText}>
                    Acerca de
                  </Link>
                </div>
              </div>
              <div className={classes.rightcon}>
                {userState.loggedIn === false && (
                  <div className={classes.btncon}>
                    <Link to="login">
                      <Btncards className={classes.btn} buttonText="Iniciar sesión"></Btncards>
                    </Link>
                  </div>
                )}
                <div className={classes.rigthposition}>
                  {/* Profile dropdown */}
                  {userState.loggedIn && (
                    <Menu as="div" className={classes.dropdowncon}>
                      {({ open }) => (
                        <>
                          <div>
                            <Menu.Button className={classes.avatarcon}>
                              <span className="sr-only">Open user menu</span>
                              <img className={classes.avatarclass} src={data?.avatar} alt="" />
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
                            <Menu.Items static className={classes.itemsdrop}>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="profile"
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    Perfil
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="profile/edit"
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    Configuración
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="createroute"
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    Crear Ruta
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="createplace"
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    Crear Lugar
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/"
                                    onClick={logOut}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
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
                  )}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className={classes.movilemenu}>
            <div className={classes.menucon}>
              {/* Current: "bg-blue-200 border-secondary text-black", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-200 hover:text-gray-700" */}
              <Link to="/" className={classes.movilelinks}>
                Home
              </Link>
              <Link to="/routes" className={classes.movilelinks}>
                Rutas
              </Link>
              <Link to="/places" className={classes.movilelinks}>
                Lugares
              </Link>
              <Link to="/about" className={classes.movilelinks}>
                Acerca de
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
export default NavBarS;
