import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PostCard from "../PostCard/postCard";
import Food1 from '../../assets/Recipes-image/food1.webp'
import Food2 from '../../assets/Recipes-image/food2.webp'
import Food3 from '../../assets/Recipes-image/food3.webp'
import Food4 from '../../assets/Recipes-image/food4.webp'
import Food5 from '../../assets/Recipes-image/food5.webp'
import Food6 from '../../assets/Recipes-image/food6.webp'
import Food7 from '../../assets/Recipes-image/food7.webp'




const PopularRecipes = () => {
    return (
        <div className="flex flex-col items-center w-full h-[700px]  ">
            <h1 className="font-bold">poular Recipes</h1>

            <ul className="flex justify-center mt-8">
                <li className="text-[24px] mx-6 hover:text-[#FF785B]"><Link to={'./'}>All</Link></li>
                <li className="text-[24px] mx-6 hover:text-[#FF785B]"><Link to={'/'}>Breakfast</Link></li>
                <li className="text-[24px] mx-6 hover:text-[#FF785B]"><Link to={'./'}>Lunch</Link></li>
                <li className="text-[24px] mx-6 hover:text-[#FF785B]"><Link to={'./'}>Supper</Link></li>

                <li className="flex absolute right-0 mr-[150px] items-center text-[18px] text-[#FF785B] underline"><Link to={'./'}>See more</Link> <FaArrowRightLong className="ml-[12px]" /></li>
            </ul>

            <div className="flex flex-wrap mt-14">
                <PostCard
                    imageUrl={Food1}
                    title="Homemade Potato Chips"
                    minutes={20}
                    servingsCount={4}
                    typeFood="American"
                />
            </div>

        </div>
    );
}

export default PopularRecipes;