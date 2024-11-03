import Navbar from "../components/Navbar/navbar";
import TopBox from "../components/TopBox/topBox";
import PopularRecipes from "../components/PopularRecipes/popularRecipes";
import WhyTastebite from "../components/Why-Tastebite/WhyTastebite";
import Introduction from "../components/Introduction/introduction";
import Feedback from "../components/Feedback/feedback";
import Footer from "../components/Footer/footer";

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