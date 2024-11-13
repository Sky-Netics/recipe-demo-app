import PostCardSmall from "../../../components/dashboardComponents/postCardSmall";
import FilterPostCard from "../../../components/dashboardComponents/filterPostCard";
import { Link } from "react-router-dom";

const AllRecipesComponent = ()=>{
    return(
        <div className="px-10">
            <h1 className="text-[18px] font-semibold">All Recipes</h1>

            <div className="py-10">
             
            <FilterPostCard />

            </div>

            <div className="flex flex-wrap justify-between mt-6"> 
                <PostCardSmall />                                          
            </div>
            
        </div>
    )
}

export default AllRecipesComponent