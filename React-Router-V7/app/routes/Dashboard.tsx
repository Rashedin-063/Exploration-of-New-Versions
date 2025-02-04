import { Outlet } from "react-router"
import About from "./about"

const Dashboard = () => {
  return (
    <div>
      <div>Hey welcome to dashboard</div>
      <Outlet/>
    </div>
  )
}
export default Dashboard