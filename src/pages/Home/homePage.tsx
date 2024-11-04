import TopBox from "../../components/topBox";
import PopularRecipes from "../../components/popularRecipes";
import WhyTastebite from "../../components/WhyTastebite";
import Introduction from "../../components/introduction";
import Feedback from "../../components/feedback";
import Footer from "../../components/footer";

const HomePage = () => {
    return (
        <>
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