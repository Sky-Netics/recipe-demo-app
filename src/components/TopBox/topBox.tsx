import FoodPlate from '../../assets/FoodPlate.png'

const TopBox = () => {
    return (

        <div className="container mx-auto h-[600px] flex justify-center items-center max-md:my-14">
            <div className="w-11/12 bg-[#FFEA74] py-2 rounded-2xl flex max-md:flex-col-reverse max-md:items-center">

                <div className="w-6/12 flex flex-col justify-center py-10 px-8 max-md:w-full max-md:items-center">
                    <h1 className="text-[48px] font-extrabold max-xl:text-[38px] max-md:text-center">Cook, Save and Share</h1>
                    <p className="text-[18px] leading-snug mt-12 max-md:text-center">
                        Taste Bite is a unique recipe sharing and discovery platform,
                        where users can save their favorite recipes in the app, create
                        new ones and share them with friends.
                    </p>

                    <button className="bg-carrot w-[180px] h-[45px] mt-4 text-[16px] text-white rounded-3xl boxShadow">
                        Get started
                    </button>
                </div>

                <div className="w-6/12 flex justify-center ">
                    <img src={FoodPlate} alt="Description of the image" className='w-full object-contain' />
                </div>

            </div>
        </div>

    );
}

export default TopBox;
