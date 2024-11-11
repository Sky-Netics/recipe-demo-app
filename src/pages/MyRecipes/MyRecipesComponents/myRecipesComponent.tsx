import FilterPostCard from "../../../components/dashboardComponents/filterPostCard"
import PostCardMyRecipes from "./postCardMyRecipes";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";


const MyRecipesComponent = ()=>{
    return(
        <div className="px-10">

        <div className="flex justify-between">
            <h1 className="text-[18px] font-semibold">My Recipes</h1>

            <Link to={'/dashboard/my-recipes/create-recipes'}>
                <button className="flex items-center w-fit text-white bg-carrot py-2 px-[20px] rounded-3xl">
                        <IoAdd className="mr-2 text-[24px]"/> Create new recipe
                </button> 
            </Link>
                   
            
        </div>
        

            <div className="py-10">
                <FilterPostCard/>
            </div>
            
            <div className="flex flex-wrap">
               
                <PostCardMyRecipes />


            </div>
            
        </div>
    )
}

export default MyRecipesComponent