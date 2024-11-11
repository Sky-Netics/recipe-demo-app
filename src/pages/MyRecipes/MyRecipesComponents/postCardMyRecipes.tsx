import { MdOutlineAccessTime } from "react-icons/md";
import { PiCookingPot } from "react-icons/pi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import StarRating from '../../../components/stars';
import { useEffect, useState } from "react";


const PostCardMyRecipes = ()=>{

    const [postCardData, setPostCardData] = useState<any[]>([])

    useEffect(()=>{
        const apiUrl = 'http://api.recipeapp.soroushsalari.com//recipes/my-recipes'
        const tokenData = localStorage.getItem('access-token')
        const token = tokenData ? JSON.parse(tokenData).token : '';

        
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res)=> res.json())
            .then((data)=>{
                setPostCardData(data.items)
                console.log(data.items)
            })
            .catch((err)=>{
                console.log(err)
            })
            
    }, [])

    

        return (

            <>
                { postCardData.map((recipesData:any)=>(

                <div className="w-[250px] h-[380px] p-3 mx-3 mb-8 rounded-md"
                    style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
        
                    <img src={recipesData.image_url} alt={recipesData.title} className="w-full h-[150px] rounded object-cover" />
        
                    <h2 className="text-[18px] font-bold mt-4">{recipesData.title}</h2>
        
                    <div className='flex justify-between mt-4'>
                        <p className='text-[14px] flex items-center font-medium'>
                            <MdOutlineAccessTime className='mr-2' />
                            {recipesData.cooking_time} Minutes
                        </p>
                        <p className='text-[14px] flex items-center font-medium'>
                            <PiCookingPot className='mr-2' />
                            {recipesData.people_served} Servings
                        </p>
                    </div>
        
                    <div className='flex justify-between  mt-4'>
                        <h3 className='bg-carrot text-white text-[14px] flex items-center px-[28px] h-[30px] my-auto rounded-2xl font-semibold'>{recipesData.country}</h3>
                        <StarRating starsCount={5} style=''/>
                    </div>
                
                    <div className="flex justify-between py-6 text-[14px]">

                        <Link to={`/dashboard/my-recipes/edit-recipes/${recipesData.id}`}>
                        <button className="flex items-center border border-carrot rounded-md px-4 py-1.5 text-carrot">
                             <FiEdit className="mr-5 text-carrot"/> Edit 
                             </button>
                        </Link>
                        
                        <button className="flex items-center bg-[#ff0000] text-white px-3 rounded-md py-1.5"> <RiDeleteBin6Line className="mr-3"/> Delete </button>

                    </div>
        
                </div>
                ))
                }
            </>
            
    )
}

export default PostCardMyRecipes