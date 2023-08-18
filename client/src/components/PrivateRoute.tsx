import { Navigate, Outlet } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux'
import { RootState } from '../store'

const PrivateRoute = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth)

  return userInfo ? <Outlet /> : <Navigate to="/signin" replace />
}
export default PrivateRoute
