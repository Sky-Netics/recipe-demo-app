import Food1 from '../../../assets/Recipes-image/food2.webp'
import { MdAccessTime } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { FaFacebook, FaTwitter  } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { useState } from 'react';






const SpecificRecipesComponent = ()=>{

    const [specificRecipeData, setSpecificRecipeData] = useState<any>([])

    const path = window.location.pathname
    const id = path.split('/').pop();
    const apiUrl = `http://api.recipeapp.soroushsalari.com/recipes/recipes/${id}`
    
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setSpecificRecipeData(data)
    })



    return(
        <div>
            
            <div className="flex justify-between mx-auto w-[350px] mb-8  mt-[-20px]">

                <h1 className="font-semibold  border-b-4 pb-2 px-1 border-carrot cursor-pointer">step by step guide</h1>
                <h1 className="font-semibold cursor-pointer">video tutorial</h1>

            </div>


            {
            

            <div className="flex pl-16 ">

            <div className="w-1/2">
                <div className='flex flex-col items-center'>
                    <img src={specificRecipeData.image_url} alt="food plate" className='w-[380px] h-[300px] object-cover rounded-md'/>
                    
                    <div className='flex w-[400px] h-[55px] mt-4'>
                        
                        <div className='flex flex-col  mr-7'>
                            <p className='flex items-center font-semibold'>
                                <MdAccessTime className='mr-2'/>
                                Servings
                            </p>
                            <p className='ml-6'>
                                {specificRecipeData.people_served}
                            </p>
                        </div>

                        <div className='flex flex-col mr-7'>
                            <p className='flex items-center font-semibold'>
                                Category
                            </p>
                            <p>
                                {specificRecipeData.category}
                            </p>
                        </div>

                        <div className='flex flex-col mr-5 '>
                            <p className='font-semibold'>
                                Cooking time
                            </p>
                            <p>
                                {specificRecipeData.cooking_time}
                            </p>
                        </div>

                        <div className='flex flex-col'>
                            <p className='flex items-center font-semibold'>
                                Country
                            </p>
                            <p>
                                {specificRecipeData.country}
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
                            <p>{specificRecipeData.user}</p>
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
                <h1 className='text-[30px] font-semibold'>{specificRecipeData.title}</h1>
            
                <h2 className='font-bold mt-7 text-[20px]'>Ingredients</h2>

                <ul className='list-disc ml-4 mt-2'>
                {specificRecipeData.ingredients && specificRecipeData.ingredients.map((item: any, index: number) => (
                    <li key={index}>{item}</li>
                ))}
                    
                </ul>

                <h2 className='font-bold mt-8 text-[20px]'>Procedure</h2>
                
                {specificRecipeData.procedure && specificRecipeData.procedure.map((item: any, index: number) => (
                    <div key={index}>
                    <h3 className='font-bold mt-4'>Step {index + 1}</h3>
                    <p className='mt-2'>{item}</p>
                    </div>
                ))}
                
            </div>

            </div>
  
        }

        </div>
    )
}

export default SpecificRecipesComponent