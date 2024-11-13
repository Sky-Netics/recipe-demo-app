import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import Recipes from "../components/recipes";
import Tastebite from "../components/tastebite";
import Footer from "../components/footer";

const HomePage = () => {
    return ( 
        <>  
            <Navbar />
            <div className="container mt-8 mx-auto px-14 md:px-7">
                <div className="bg-butter w-full rounded-xl grid grid-cols-1 items-center md:grid-cols-2">
                    <div className="px-5">
                        <h1 className="text-3xl font-bold py-5 xl:text-5xl">Cook, Save and Share</h1>
                        <p>Taste Bite is a unique recipe sharing and discovery platform, where users can Save their favorite recipes in the app, create new ones and share them with friends.</p>
                        <div className="mt-10 mb-14">
                            <Link className="bg-carrot px-16 py-2 rounded-xl" to={"/dashboard"}>Get Started</Link>
                        </div>
                    </div>
                    <div>
                        <img src={"/images/FoodPlate.54cc01f110926cd645cb.png"} alt="salad" />
                    </div>
                </div>
                <div id="recipes" className="mt-14 mb-12">
                    <p className="recipes-topic mb-3">Popular Recipes</p>
                    <div className="flex items-center justify-center md:justify-between gap-8">
                        <div className="w-28 hidden md:block"></div>
                        <div className="flex gap-8">
                            <p className="cursor-pointer border-b-2 border-carrot">All</p>
                            <p className="cursor-pointer">Breakfast</p>
                            <p className="cursor-pointer">Lunch</p>
                            <p className="cursor-pointer">Supper</p>
                        </div>
                        <Link to={"/recipes"} className="hidden md:flex gap-2 items-center text-carrot w-28 underline">
                            <p>See more</p>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
                <Recipes pagination={1}/>
                <Tastebite />
                <Carousel />
                <div className="w-full bg-carrot rounded-lg text-white text-center px-2 py-12 sm:px-8 md:px-24 lg:px-32 xl:px-40 relative top-16">
                    <div className="mb-8">
                        <p className="font-bold">Newsletter</p>
                        <p className="font-bold">Subscribe To Our Newsletter</p>
                    </div>
                    <label className="font-light" htmlFor="email">And never miss latest updates!</label>
                    <div className="flex w-full h-10 border-2 border-white mt-2">
                        <div className="w-3/4"><input className="w-full h-full bg-carrot placeholder:text-white placeholder:px-2" placeholder="Email Address" id="email" name="email" type="email" /></div>
                        <div className="w-1/4"><button className="w-full h-full text-sm border-l-2 border-white text-carrot bg-white">Subscribe</button></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
     );
}
 
export default HomePage;