import DashboardMenue from "../../components/dashboardComponents/dashboardMenue"
import DashboardNavbar from "../../components/dashboardComponents/dashboardNavbar"
import AllRecipesComponent from "./AllRecipesComponents/AllRecipesComponent"

const AllRecipesPage = ()=>{
    return(
        <div className="flex  ">
            <DashboardMenue/>

            <div className="w-full">
                <DashboardNavbar/>
                <AllRecipesComponent/>
            </div>
        </div>
    )
}

export default AllRecipesPage