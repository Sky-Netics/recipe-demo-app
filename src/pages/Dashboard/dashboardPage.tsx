import React, { useState } from "react";
import DashboardMenue from "../../components/dashboardComponents/dashboardMenue";
import DashboardMainComponent from "./DasboardComponents/dashboardMainComponent";
import DashboardNavbar from "../../components/dashboardComponents/dashboardNavbar";
import { IoMdMenu, IoMdClose  } from "react-icons/io";

const DashboardPage = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <div className="flex">
            <div className={`max-xl:hidden xl:block `}>
                <DashboardMenue />
            </div>

            <div className="xl:hidden block">
                {
                    isMenuVisible ? 
                    <IoMdClose onClick={toggleMenu} className="cursor-pointer absolute m-3 test-red z-20"/> : 
                    <IoMdMenu onClick={toggleMenu} className="cursor-pointer absolute m-3 z-20" />
                }
                
            </div>

            {isMenuVisible && (
                <div className="xl:hidden max-xl:fixed">
                    <DashboardMenue />
                </div>
            )}

            <div className="w-full ">
                <DashboardNavbar />
                <DashboardMainComponent />
            </div>
        </div>
    );
};

export default DashboardPage;
