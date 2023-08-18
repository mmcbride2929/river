import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

interface sidebarInterface {
  setSidebarActive: (active: boolean) => void
  logoutHandler: () => void
}

const Sidebar = ({ setSidebarActive, logoutHandler }: sidebarInterface) => {
  const { userInfo } = useSelector((state: RootState) => state.auth)

  const handleSignOut = () => {
    logoutHandler()
    setSidebarActive(false)
  }

  return (
    <div>
      <div className="flex h-screen flex-col  justify-between  bg-blue-600">
        <div className="px-4 py-4 h-full ">
          <button
            className=" block rounded bg-white p-2.5 text-black transition hover:text-gray-900/75 md:hidden"
            onClick={() => setSidebarActive(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.95 5.636l-1.414-1.414L10 8.586 6.464 5.05 5.05 6.464 8.586 10l-3.536 3.536 1.414 1.414L10 11.414l3.536 3.536 1.414-1.414L11.414 10l3.536-3.536z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <ul className="h-full flex flex-col justify-center space-y-1">
            <li className="block rounded-lg px-4 py-2 text-5xl  font-medium text-white hover:text-black hover:bg-white ">
              <Link onClick={() => setSidebarActive(false)} to="/">
                Home
              </Link>
            </li>
            <li className="block rounded-lg px-4 py-2 text-5xl  font-medium text-white hover:text-black hover:bg-white ">
              <Link onClick={() => setSidebarActive(false)} to="/profile">
                Profile
              </Link>
            </li>
            {userInfo ? (
              <>
                <li className="block rounded-lg px-4 py-2 text-5xl  font-medium text-white hover:text-black hover:bg-white ">
                  <Link onClick={handleSignOut} to="/signin">
                    sign-out
                  </Link>
                </li>
              </>
            ) : (
              <li className="block rounded-lg px-4 py-2 text-5xl  font-medium text-white hover:text-black hover:bg-white ">
                <Link onClick={() => setSidebarActive(false)} to="/signin">
                  sign-in
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Sidebar
