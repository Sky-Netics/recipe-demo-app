import FilterPostCard from "../../../components/dashboardComponents/filterPostCard"
import PostCardSmall from "../../../components/dashboardComponents/postCardSmall"

const FavouritesComponent = ()=>{
    return(
        <div className="px-10">

             <h1 className="text-[18px] mb-8 font-bold">Favourites</h1>
            
             <FilterPostCard/>

            <div className="mt-12">
                <PostCardSmall />
            </div>
             
        </div>
    )
}

export default FavouritesComponent