import FilterPostCard from "../../../components/dashboardComponents/filterPostCard"
import PostCardMyRecipes from "./postCardMyRecipes";
import { IoAdd } from "react-icons/io5";

import Food1 from '../../../assets/Recipes-image/food1.webp'
import Food2 from '../../../assets/Recipes-image/food2.webp'
import Food3 from '../../../assets/Recipes-image/food3.webp'
import Food4 from '../../../assets/Recipes-image/food4.webp'


const MyRecipesComponent = ()=>{
    return(
        <div className="px-10">

        <div className="flex justify-between">
            <h1 className="text-[18px] font-semibold">My Recipes</h1>

            <button className="flex items-center w-fit text-white bg-carrot py-2 px-[20px] rounded-3xl">
                        <IoAdd className="mr-2 text-[24px]"/> Create new recipe
            </button>        
            
        </div>
        

            <div className="py-10">
                <FilterPostCard/>
            </div>
            
            <div className="flex flex-wrap">
               
                <PostCardMyRecipes 
                    imageUrl={Food1}
                    title="Homemade Potato Chips"
                    minutes={20}
                    servingsCount={4}
                    typeFood="American"
                />

                <PostCardMyRecipes 
                    imageUrl={Food2}
                    title="Tagliata Alla Fiorentina"
                    minutes={40}
                    servingsCount={2}
                    typeFood="Kenyan"
                />

                <PostCardMyRecipes 
                   imageUrl={Food3}
                   title="Raspberry Almond Tart"
                   minutes={60}
                   servingsCount={1}
                   typeFood="Italian"
                />

                <PostCardMyRecipes 
                    imageUrl={Food4}
                    title="Sweet Pumpkin Strudel"
                    minutes={60}
                    servingsCount={4}
                    typeFood="Italian"
                />
                

            </div>
            
        </div>
    )
}

export default MyRecipesComponent