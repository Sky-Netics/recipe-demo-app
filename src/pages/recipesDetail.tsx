import { useParams } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";

import GuideRecipes from "../components/guideRecipes";
import VideoRecipes from "../components/videoRecipes";
import DashboardNavbar from "../components/dashboardNavbar";

const RecipesDetail = () => {
    const domain:string = "http://api.recipeapp.soroushsalari.com/"

    const [status,setStatus] = useState("guide");
    
    const video = useRef<HTMLParagraphElement|null>(null)
    const guide = useRef<HTMLParagraphElement|null>(null)

    const guideORvideo = ():React.ReactNode =>{
        if (status==="guide"){
            return <GuideRecipes />
        }else 
            return <VideoRecipes />
    }

    const changeComponent = (result:string)=>{
        if (result==="guide"){
            setStatus("guide")
            video.current?.classList.remove("active-header")
            guide.current?.classList.add("active-header")
        }else{
            setStatus("video")
            guide.current?.classList.remove("active-header")
            video.current?.classList.add("active-header")
        }
    }

    return (<>
            <DashboardNavbar />
            <div className="xl:ml-60 flex flex-col items-center mt-5">
                <div className="flex gap-12">
                    <p ref={guide} onClick={()=>{changeComponent("guide")}} className="cursor-pointer active-header">Step by step guide</p>
                    <p ref={video} onClick={()=>{changeComponent("video")}} className="cursor-pointer">Video Tutorial</p>
                </div>
                {guideORvideo()}
            </div>
    </>);
}
 
export default RecipesDetail;