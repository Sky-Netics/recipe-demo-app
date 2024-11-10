import { IoAdd } from "react-icons/io5";
import PostCardSmall from "../../../components/dashboardComponents/postCardSmall";
import Food1 from '../../../assets/Recipes-image/food1.webp'
import Food2 from '../../../assets/Recipes-image/food2.webp'
import Food3 from '../../../assets/Recipes-image/food3.webp'
import Food4 from '../../../assets/Recipes-image/food4.webp'
import { Link } from "react-router-dom";


const DashboardMainComponent = ()=>{
    return(
        <div className="w-full">

            

                <div className="flex flex-wrap justify-between items-center px-10 py-6">

                    <div>

                        <h2 className="mb-2">Total app users</h2>

                        <div className="flex flex-col w-[200px] h-16 bg-gray-200 rounded-lg">

                        </div>

                    </div>

                    <div>

                        <h2 className="mb-2">Recipes</h2>

                        <div className="flex flex-col w-[200px] h-16 bg-gray-200 rounded-lg">

                        </div>

                    </div>

                    <div>

                        <h2 className="mb-2">My favourites</h2>

                        <div className="flex flex-col w-[200px] h-16 bg-gray-200 rounded-lg">

                        </div>

                    </div>      

                    <Link to={'/dashboard/my-recipes/create-recipes'} className="flex items-center w-fit text-white bg-carrot py-2 px-[20px] rounded-3xl mr-4">
                        <IoAdd className="mr-2 text-[24px]"/> Create new recipe
                    </Link>

                </div>


                <div className="flex flex-col px-10 py-6 ">

                    <h1 className="font-bold text-[18px]">Popular Recipes</h1>

                    <div className="flex justify-between mt-6"> 
                        
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
                
            
            


        </div>
    )
}

export default DashboardMainComponent;