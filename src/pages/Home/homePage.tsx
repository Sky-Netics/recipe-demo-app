import TopBox from "./HomeComponents/topBox";
import PopularRecipes from "./HomeComponents/popularRecipes";
import WhyTastebite from "./HomeComponents/whyTastebite";
import Introduction from "./HomeComponents/introduction";
import Feedback from "./HomeComponents/feedback";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className=" text-4xl flex flex-col">
                <TopBox />
                <PopularRecipes />
                <WhyTastebite />
                <Introduction />
                <Feedback />
                <Footer/>
            </div>
        </>
    );
}

export default HomePage;