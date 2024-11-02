import Navbar from "../components/Navbar/navbar";
import TopBox from "../components/TopBox/topBox";
import PopularRecipes from "../components/PopularRecipes/popularRecipes";


const HomePage = () => {
    return (
        <>
            <Navbar />

            <div className=" text-4xl flex flex-col">
                <TopBox />
                <PopularRecipes />
            </div>
        </>
    );
}

export default HomePage;