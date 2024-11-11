import { useState } from "react"
import DashboardMenue from "../../components/dashboardComponents/dashboardMenue"
import DashboardNavbar from "../../components/dashboardComponents/dashboardNavbar"
import EditRecipesComponent from "./EditRecipesComponents/EditRecipesComponents"

const EditRecipesPage = () =>{

    return(
        <div className="flex bg-gray-300 ">
        <DashboardMenue/>
        <div className="w-full">
            <DashboardNavbar/>
            <EditRecipesComponent/>
        </div> 
        </div>
    )
}

export default EditRecipesPage