import DashboardMenue from "../../components/dashboardComponents/dashboardMenue"
import DashboardNavbar from "../../components/dashboardComponents/dashboardNavbar"
import SpecificRecipesComponent from "./SpecificRecipeComponents/SpecificRecipeComponents"

const SpecificRecipesPage = ()=>{
    return(
        <div className="flex">
            <DashboardMenue/>

            <div className="w-full">
                <DashboardNavbar/>
                <SpecificRecipesComponent/>
            </div>
        </div>
    )
}

export default SpecificRecipesPage