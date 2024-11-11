import { IoAdd } from "react-icons/io5";
import PostCardSmall from "../../../components/dashboardComponents/postCardSmall";
import { Link } from "react-router-dom";


const DashboardMainComponent = ()=>{
    return(
        <div className="w-full">

                <div className="flex flex-wrap justify-between items-center px-10 py-6 max-xl:justify-center">

                    <div className="max-xl:mx-5 my-2">

                        <h2 className="mb-2">Total app users</h2>

                        <div className="flex flex-col w-[200px] h-16 bg-gray-200 rounded-lg">

                        </div>

                    </div>

                    <div className="max-xl:mx-5 my-2">

                        <h2 className="mb-2">Recipes</h2>

                        <div className="flex flex-col w-[200px] h-16 bg-gray-200 rounded-lg">

                        </div>

                    </div>

                    <div className="max-xl:mx-5 my-2">

                        <h2 className="mb-2">My favourites</h2>

                        <div className="flex flex-col w-[200px] h-16 bg-gray-200 rounded-lg">

                        </div>

                    </div>      

                    <Link to={'/dashboard/my-recipes/create-recipes'} className="flex items-center w-fit text-white bg-carrot py-2 px-[20px] rounded-3xl mr-4 max-xl:mt-4">
                        <IoAdd className="mr-2 text-[24px]"/> Create new recipe
                    </Link>

                </div>


                <div className="flex flex-col px-10 py-6 ">

                    <h1 className="font-bold text-[18px] max-xl:text-center">Popular Recipes</h1>

                    <div className="flex justify-between mt-6"> 
                        
                        <PostCardSmall/>

                    </div>

                </div>
                
        </div>
    )
}

export default DashboardMainComponent;