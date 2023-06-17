import { Navigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import { useAuth } from "../hooks/useAuth";

const DashboardPage = () => {

  const {isAuth, username} = useAuth()
  return isAuth ? (
    <div>
     
      <Dashboard username={username} />
     
    </div>
  ) : (
    <Navigate to='/login' />
  )
}
 
export default DashboardPage;