import Food1 from '../../../assets/Recipes-image/food2.webp'
import { MdAccessTime } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { FaFacebook, FaTwitter  } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { Link } from 'react-router-dom';






const SpecificRecipesComponent = ()=>{

    const path = window.location.pathname
    const id = path.split('/').pop();
    console.log(id)

    return(
        <div>

            <div className="flex justify-between mx-auto w-[350px] mb-8  mt-[-20px]">

                <h1 className="font-semibold  border-b-4 pb-2 px-1 border-carrot">step by step guide</h1>
                <h1 className="font-semibold">video tutorial</h1>

            </div>

            <div className="flex pl-16 ">

            <div className="w-1/2">
                <div className='flex flex-col items-center'>
                    <img src={Food1} alt="food plate" className='w-[380px] h-[300px] object-cover rounded-md'/>
                    
                    <div className='flex w-[400px] h-[55px] mt-4'>
                        
                        <div className='flex flex-col  mr-7'>
                            <p className='flex items-center font-semibold'>
                                <MdAccessTime className='mr-2'/>
                                Servings
                            </p>
                            <p className='ml-6'>
                                2
                            </p>
                        </div>

                        <div className='flex flex-col mr-7'>
                            <p className='flex items-center font-semibold'>
                                Category
                            </p>
                            <p>
                                Breakfast
                            </p>
                        </div>

                        <div className='flex flex-col mr-7'>
                            <p className='font-semibold'>
                                Cooking time
                            </p>
                            <p>
                                5 Min
                            </p>
                        </div>

                        <div className='flex flex-col'>
                            <p className='flex items-center font-semibold'>
                                Country
                            </p>
                            <p>
                                Iran
                            </p>
                        </div>

                    </div>

                    <div className='flex items-center w-[400px] h-[50px] mt-4'>
                       
                        <button className='flex items-center bg-carrot h-fit text-white text-[14px] py-1.5 px-5 rounded-3xl mr-10'>
                            <CiBookmark  className='mr-2'/>
                            Bookmark
                        </button>

                        <div>
                            <p className='font-bold text-[14px] mb-1'>Recipe creator</p>
                            <p>amirmmdjf</p>
                        </div>

                    </div>

                    <div className='flex flex-col w-[400px] mt-6'>
                        <h2 className='font-bold'>Share on social media</h2>
                        <div className='flex justify-between w-[165px] mt-5'>
                            <Link to={'./'}>
                                <FaFacebook className='text-carrot text-[24px]'/>                            
                            </Link>

                            <Link to={'./'}>
                                <FaTwitter className='text-carrot text-[24px]'/>
                            </Link>

                            <Link to={'./'}>
                                <PiInstagramLogoFill className='text-carrot text-[24px]'/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-1/2">
                <h1 className='text-[30px] font-semibold'>Tagliata Alla Fiorentina</h1>
            
                <h2 className='font-bold mt-7 text-[20px]'>Ingredients</h2>

                <ul className='list-disc ml-4 mt-2'>
                    <li >1/2 teaspon salt</li>
                </ul>

                <h2 className='font-bold mt-7 text-[20px]'>Procedure</h2>
                
                <h3 className='font-bold mt-4'>Step1</h3>
                <p className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

            </div>

            </div>



        </div>
    )
}

export default SpecificRecipesComponent