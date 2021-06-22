import { FunctionComponent as FC, useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../assets/logo512.png"
import { routes } from "../routes/index"
import { AppContext } from "../App"
import { ShoppingCartIcon, EmojiSadIcon } from "@heroicons/react/solid"

const Nav: FC = (): JSX.Element => {
  const { state, dispatch } = useContext(AppContext),
    [isOpen, setIsOpen] = useState<boolean>(false),
    [navIsFixed, setNavIsFixed] = useState<boolean>(
      window.scrollY > 50 ? true : false
    )

  const searchByName = (query: string) => {
    console.log(query)
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 50) {
        setNavIsFixed(true)
      } else {
        setNavIsFixed(false)
      }
    })
  }, [])

  return (
    <header>
      <nav
        className={`bg-white border-b dark:bg-gray-800 ${
          navIsFixed ? "fixed z-40 top-0 w-4/5" : ""
        }`}
      >
        <div className="px-6 py-3 mx-auto md:flex md:justify-between">
          <div className="md:flex items-center justify-between">
            <div className="flex items-center justify-between space-x-8">
              <div>
                <Link to="/accueil">
                  <img
                    className="h-10 w-10"
                    src={Logo}
                    alt="Logo de la boutique"
                  />
                </Link>
              </div>
              <div className="hidden md:flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0 space-x-8 items-center">
                {routes.map((route) =>
                  route.nav ? (
                    <Link
                      key={route.name}
                      className="text-gray-600 font-medium"
                      to={route.path}
                    >
                      {route.name}
                    </Link>
                  ) : (
                    ""
                  )
                )}
              </div>
              <div className="flex md:hidden">
                <button
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:items-center space-x-5">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>

              <input
                type="text"
                className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                placeholder="Search"
              />
            </div>
            <div className="flex justify-center md:block">
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="relative z-10 block p-2 bg-white rounded-md dark:bg-gray-800 focus:outline-none"
                >
                  <ShoppingCartIcon className="w-5 h-5" />
                  {state.length > 0 ? (
                    <span className="absolute inline-block top-0 left-0 p-1 text-xs text-white bg-indigo-500 rounded-full animate-pulse"></span>
                  ) : null}
                </button>
                {isOpen ? (
                  <div className="absolute right-0 z-20 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
                    <div className="px-3 py-7 flex flex-col space-y-8 max-h-56 overflow-y-auto">
                      {state.length > 0 ? (
                        state.map((product) => (
                          <div
                            key={product.id}
                            className="px-3 flex items-center justify-between"
                          >
                            <div>
                              <div className="flex items-center">
                                <img
                                  className="w-8 h-8 rounded-full my-auto mr-2"
                                  src={product.img}
                                  alt={"Photo de l'article" + product.name}
                                />
                                <Link
                                  to={"/articles/" + product.id}
                                  className="min-w-max"
                                >
                                  {product.name}
                                </Link>
                              </div>
                            </div>
                            <p className="font-semibold ml-32 text-gray-400">
                              x{product.qty}
                            </p>
                          </div>
                        ))
                      ) : (
                        <div className="flex space-x-2 justify-center items-center min-w-max px-4">
                          <EmojiSadIcon className="h-5 w-5" />
                          <p>Votre panier est vide</p>
                        </div>
                      )}
                    </div>
                    {state.length > 0 ? (
                      <Link
                        to="/summary"
                        className="block py-2 font-bold text-center text-white bg-gray-800 dark:bg-gray-700 hover:underline rounded-b-md"
                      >
                        Checkout
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Nav
