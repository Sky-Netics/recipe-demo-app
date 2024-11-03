import Food1 from '../../assets/Introduction/food1.png'
import Food2 from '../../assets/Introduction/food2.png'

const Introduction = () => {
    return (
        <div className="flex flex-col my-16 px-[220px] max-xl:px-[100px] max-md:px-0">

            <div className="flex items-center mb-10  rounded-xl max-lg:flex-col ">

                <div className="w-4/12 bg-carrot rounded-xl flex justify-center items-center max-md:w-8/12">
                    <img src={Food1} alt="food-image" className='w-[380px]' />
                </div>

                <div className="w-8/12 flex flex-col justify-center px-[130px] max-xl:px-[50px] max-lg:text-center max-lg:mt-10 max-md:px-0">
                    <h2 className='text-[24px] font-bold'>Craete your own recipe book!</h2>
                    <p className='text-[20px] leading-snug mt-8'>
                        Taste Bite helps you to prepare delicious meals. There are also categories of healthy cuisine, vegetarian recipes or desserts on our platform.
                    </p>
                </div>

            </div>



            <div className="flex max-lg:flex-col-reverse max-lg:items-center max-lg:mt-[70px]">

                <div className="w-8/12 flex flex-col justify-center pr-[260px] max-xl:px-[50px] max-lg:text-center max-lg:mt-10 max-md:px-0">
                    <h2 className='text-[24px] font-bold'>Share your recipes with the world</h2>
                    <p className='text-[20px] leading-snug mt-8'>
                        Discover new recipes with the help of other users and
                        social networks, and share them with friends.
                    </p>
                </div>

                <div className="w-4/12 bg-[#ffea74] rounded-xl flex justify-center max-md:w-8/12">
                    <img src={Food2} alt="food-image" className='w-[380px]' />
                </div>
            </div>


        </div>
    )
}

export default Introduction;