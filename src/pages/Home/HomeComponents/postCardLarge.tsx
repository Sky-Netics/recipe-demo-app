import { useState, useEffect } from "react";
import { MdOutlineAccessTime } from "react-icons/md";
import { PiCookingPot } from "react-icons/pi";
import StarRating from '../../../components/stars';



const PostCardLarge = () => {

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
        <>
            {postCardData.map((data:any)=>(
                <div className="w-[300px] h-[410px] p-3 mx-3 mb-8 cursor-pointer rounded-sm"
                    style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>

                <img src={data.image_url} alt={data.title} className="w-full h-[200px] rounded object-none" />

                <h2 className="text-[22px] font-bold">{data.title}</h2>

                <div className='flex justify-between mt-4'>
                    <p className='text-[16px] flex items-center font-medium'>
                    <MdOutlineAccessTime className='mr-2' />
                    {data.cooking_time} Minutes
                    </p>
                    <p className='text-[16px] flex items-center font-medium'>
                    <PiCookingPot className='mr-2' />
                    {data.people_served} Servings
                    </p>
                </div>

                <div className='flex justify-between  mt-4'>
                    <h3 className='bg-carrot text-white text-[14px] flex items-center px-[28px] h-[30px] my-auto rounded-2xl font-semibold'>{data.category}</h3>
                    <StarRating starsCount={5} style='text-2xl'/>
                </div>
            
            </div>
            ))}
        </>

    );
}

export default PostCardLarge;