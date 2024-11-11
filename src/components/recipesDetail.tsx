import { useParams } from "react-router-dom";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import GuideRecipes from "./guideRecipes";
import VideoRecipes from "./videoRecipes";

const RecipesDetail = () => {
    const id:string|undefined = useParams().id

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