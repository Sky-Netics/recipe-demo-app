import DashboardMenue from "../../components/dashboardComponents/dashboardMenue"
import DashboardNavbar from "../../components/dashboardComponents/dashboardNavbar"
import AccountComponent from "./AccountComponents/AccountComponent"

const AccountPage = ()=>{
    return(
        <div className="flex">
            <DashboardMenue/>

            <div className="w-full">
                <DashboardNavbar/>
                <AccountComponent/>
            </div>
        </div>
    )
}

export default AccountPage