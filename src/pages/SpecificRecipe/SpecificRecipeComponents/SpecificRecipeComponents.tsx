import Food1 from '../../../assets/Recipes-image/food5.webp'


const SpecificRecipesComponent = ()=>{
    return(
        <div>

            <div className="flex justify-between mx-auto w-[350px] mb-8 ">

                <h1 className="font-semibold  border-b-4 pb-2 px-1 border-carrot">step by step guide</h1>
                <h1 className="font-semibold">video tutorial</h1>

            </div>

        <div className="flex pl-16 ">

            <div className="w-1/2">
                <div>
                    <img src={Food1} alt="food plate" className='w-[400px] h-[300px]'/>
                </div>
            </div>

            <div className="w-1/2">
                2
            </div>

        </div>

        </div>
    )
}

export default SpecificRecipesComponent