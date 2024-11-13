import { MdOutlineAccessTime } from "react-icons/md";
import { PiCookingPot } from "react-icons/pi";
import StarRating from '../../components/stars';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostCardSmall = () => {

    const [postCardData, setPostCardData] = useState<any>([])
   
    useEffect(()=>{
        
        const apiUrl = 'http://api.recipeapp.soroushsalari.com/recipes/recipes'

        fetch(apiUrl)
            .then((res)=> res.json())
            .then((data)=>{
                const slicedData = data.items.slice(0,8)
                setPostCardData(slicedData)
                console.log(data.items)
            })
            .catch((err)=>{
                console.log(err)
            })
            
    }, [])
    
    return (
        <div className="flex flex-wrap">
        {
            postCardData.map((data:any)=>(
                <Link to={`/dashboard/all-recipes/${data.id}`}>
                
                <div className="w-[250px] h-[320px] p-3 mx-4 mb-8 cursor-pointer rounded-md"
                    style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>

                <img src={data.image_url} alt={data.title} className="w-full h-[150px] rounded object-cover" />

                <h2 className="text-[18px] font-bold mt-4">{data.title}</h2>

                <div className='flex justify-between mt-4'>
                <p className='text-[14px] flex items-center font-medium'>
                    <MdOutlineAccessTime className='mr-2' />
                    {data.cooking_time} Minutes
                </p>
                <p className='text-[14px] flex items-center font-medium'>
                    <PiCookingPot className='mr-2' />
                    {data.people_served} Servings
                </p>
                </div>

                <div className='flex justify-between  mt-4'>
                    <h3 className='bg-carrot text-white text-[14px] flex items-center px-[28px] h-[30px] my-auto rounded-2xl font-semibold'>{data.country}</h3>
                    <StarRating starsCount={5} style=''/>
                </div>

                </div>
                </Link>
            ))
    }
        </div>
    );
}

export default PostCardSmall