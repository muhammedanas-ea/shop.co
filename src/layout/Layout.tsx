import Header from "../components/Header"
import { Outlet } from "react-router-dom"

const Layout = () =>{
    return(
        <div className="max-w-screen-2xl mx-auto">
        <Header/>
        <Outlet />
        </div>
    )
}

export default Layout