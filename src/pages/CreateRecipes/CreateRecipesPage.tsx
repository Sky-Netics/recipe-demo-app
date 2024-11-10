import { useState } from "react"
import DashboardMenue from "../../components/dashboardComponents/dashboardMenue"
import DashboardNavbar from "../../components/dashboardComponents/dashboardNavbar"
import CreateRecipesComponent from "./CreateRecipesComponents/CreateRecipesComponents"


const CreateRecipesPage = () =>{

    return(
        <div className="flex bg-gray-300 ">
        <DashboardMenue/>
        <div className="w-full">
            <DashboardNavbar/>
            <CreateRecipesComponent/>
        </div> 
        </div>
    )
}

export default CreateRecipesPage