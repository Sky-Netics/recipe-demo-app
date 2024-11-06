import DashboardMenue from "../../components/dashboardComponents/dashboardMenue"
import DashboardMainComponent from "./DasboardComponents/dashboardMainComponent"
import DashboardNavbar from "../../components/dashboardComponents/dashboardNavbar"

const DashboardPage = ()=>{
    return(
        <div className="flex">
            <DashboardMenue/>
            <div className="w-full">
                <DashboardNavbar/>
                <DashboardMainComponent/>
            </div> 
        </div>
    )
}

export default DashboardPage