import PostCardSmall from "../../../components/dashboardComponents/postCardSmall";
import FilterPostCard from "../../../components/dashboardComponents/filterPostCard";
import Food1 from '../../../assets/Recipes-image/food1.webp'
import Food2 from '../../../assets/Recipes-image/food2.webp'
import Food3 from '../../../assets/Recipes-image/food3.webp'
import Food4 from '../../../assets/Recipes-image/food4.webp'



const AllRecipesComponent = ()=>{
    return(
        <div className="px-10">
            <h1 className="text-[18px] font-semibold">All Recipes</h1>

            <div className="py-10">
             
            <FilterPostCard />

            </div>


            <div className="flex flex-wrap justify-between mt-6"> 
                        
                        <PostCardSmall
                                  imageUrl={Food1}
                                  title="Homemade Potato Chips"
                                  minutes={20}
                                  servingsCount={4}
                                  typeFood="American"
                        />

                        <PostCardSmall
                                  imageUrl={Food2}
                                  title="Tagliata Alla Fiorentina"
                                  minutes={40}
                                  servingsCount={2}
                                  typeFood="Kenyan"
                        />

                        <PostCardSmall
                                  imageUrl={Food3}
                                  title="Raspberry Almond Tart"
                                  minutes={60}
                                  servingsCount={1}
                                  typeFood="Italian"
                        />

                        <PostCardSmall
                                  imageUrl={Food4}
                                  title="Sweet Pumpkin Strudel"
                                  minutes={60}
                                  servingsCount={4}
                                  typeFood="Italian"
                        />

                        <PostCardSmall
                                  imageUrl={Food1}
                                  title="Homemade Potato Chips"
                                  minutes={20}
                                  servingsCount={4}
                                  typeFood="American"
                        />

                        <PostCardSmall
                                  imageUrl={Food2}
                                  title="Tagliata Alla Fiorentina"
                                  minutes={40}
                                  servingsCount={2}
                                  typeFood="Kenyan"
                        />

                        <PostCardSmall
                                  imageUrl={Food3}
                                  title="Raspberry Almond Tart"
                                  minutes={60}
                                  servingsCount={1}
                                  typeFood="Italian"
                        />

                        <PostCardSmall
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

export default AllRecipesComponent