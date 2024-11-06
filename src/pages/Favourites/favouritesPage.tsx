import DashboardMenue from "../../components/dashboardComponents/dashboardMenue"
import DashboardNavbar from "../../components/dashboardComponents/dashboardNavbar"
import FavouritesComponent from "./FavouritesComponents/FavouritesComponent"

const FavouritesPage = ()=>{
    return(
        <div className="flex">
            <DashboardMenue/>

            <div className="w-full">
                <DashboardNavbar/>
                <FavouritesComponent/>
            </div>
        </div>
    )
}

export default FavouritesPage