import FoodPlate from '../../assets/FoodPlate.png'

const TopBox = () => {
    return (

        <div className="container mx-auto h-[600px] flex justify-center items-center">
            <div className="w-[1200px] bg-[#FFEA74] h-[450px] rounded-2xl flex">

                <div className="w-6/12 flex flex-col justify-center py-10 px-8">
                    <h1 className="text-[48px] font-extrabold">Cook, Save and Share</h1>
                    <p className="text-[18px] leading-tight mt-12">
                        Taste Bite is a unique recipe sharing and discovery platform,
                        where users can save their favorite recipes in the app, create
                        new ones and share them with friends.
                    </p>

                    <button className="bg-carrot w-[180px] h-[45px] mt-4 text-[16px] text-white rounded-3xl boxShadow">
                        Get started
                    </button>
                </div>

                <div className="w-6/12 flex justify-center">
                    <img src={FoodPlate} alt="Description of the image" 
                    />
                </div>

            </div>
        </div>

    );
}

export default TopBox;
