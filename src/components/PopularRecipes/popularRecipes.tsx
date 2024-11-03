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
import Food8 from '../../assets/Recipes-image/food8.webp'




const PopularRecipes = () => {
    return (
        <div className="flex flex-col items-center w-full mb-16  ">
            <h1 className="font-bold">poular Recipes</h1>

            <ul className="flex justify-center mt-8">
                <li className="text-[24px] mx-6 hover:text-[#FF785B]"><Link to={'./'}>All</Link></li>
                <li className="text-[24px] mx-6 hover:text-[#FF785B]"><Link to={'/'}>Breakfast</Link></li>
                <li className="text-[24px] mx-6 hover:text-[#FF785B]"><Link to={'./'}>Lunch</Link></li>
                <li className="text-[24px] mx-6 hover:text-[#FF785B]"><Link to={'./'}>Supper</Link></li>

                <li className="flex absolute right-0 mr-[150px] items-center text-[18px] text-[#FF785B] underline max-lg:hidden"><Link to={'./'}>See more</Link> <FaArrowRightLong className="ml-[12px]" /></li>
            </ul>

            <div className="flex flex-wrap justify-center mt-14">

                <PostCard
                    imageUrl={Food1}
                    title="Homemade Potato Chips"
                    minutes={20}
                    servingsCount={4}
                    typeFood="American"
                />

                <PostCard
                    imageUrl={Food2}
                    title="Tagliata Alla Fiorentina"
                    minutes={40}
                    servingsCount={2}
                    typeFood="Kenyan"
                />

                <PostCard
                    imageUrl={Food3}
                    title="Raspberry Almond Tart"
                    minutes={60}
                    servingsCount={1}
                    typeFood="Italian"
                />

                <PostCard
                    imageUrl={Food4}
                    title="Sweet Pumpkin Strudel"
                    minutes={60}
                    servingsCount={4}
                    typeFood="Italian"
                />

                <PostCard
                    imageUrl={Food5}
                    title="Alder-Planked Salmon with Egg Sauce"
                    minutes={60}
                    servingsCount={10}
                    typeFood="Italian"
                />

                <PostCard
                    imageUrl={Food6}
                    title="Accordion Potatoes"
                    minutes={60}
                    servingsCount={3}
                    typeFood="Italian"
                />

                <PostCard
                    imageUrl={Food7}
                    title="Tangerine-Gin Fizz"
                    minutes={10}
                    servingsCount={4}
                    typeFood="Italian"
                />

                <PostCard
                    imageUrl={Food8}
                    title="5 Spice Cajun Shrimp"
                    minutes={60}
                    servingsCount={10}
                    typeFood="Italian"
                />

            </div>

        </div>
    );
}

export default PopularRecipes;