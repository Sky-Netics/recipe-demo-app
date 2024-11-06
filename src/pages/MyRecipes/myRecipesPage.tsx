import DashboardMenue from "../../components/dashboardComponents/dashboardMenue"
import DashboardNavbar from "../../components/dashboardComponents/dashboardNavbar"
import MyRecipesComponent from "./MyRecipesComponents/myRecipesComponent"

const MyRecipesPage = ()=>{
    return(
        <div className="flex">
            <DashboardMenue/>

            <div className="w-full">
                <DashboardNavbar/>
                <MyRecipesComponent/>
            </div>
        </div>
    )
}

export default MyRecipesPage