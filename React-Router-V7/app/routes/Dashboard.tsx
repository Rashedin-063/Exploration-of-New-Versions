import { Outlet } from "react-router"
import About from "./about"

const Dashboard = () => {
  return (
    <div>
      <About/>
      <Outlet/>
    </div>
  )
}
export default Dashboard