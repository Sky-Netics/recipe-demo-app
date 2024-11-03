import styles from './postCard.module.css'
import { MdOutlineAccessTime } from "react-icons/md";
import { PiCookingPot } from "react-icons/pi";
import StarRating from '../Stars/stars';



type Props = {
    imageUrl: string,
    title: string,
    minutes: number,
    servingsCount: number,
    typeFood: string
}

const PostCard = ({ imageUrl, title, minutes, servingsCount, typeFood }: Props) => {
    return (

        <div className={`${styles.boxShadow} w-[300px] h-[410px] p-3 mx-3 mb-8 cursor-pointer`}>

            <img src={imageUrl} alt={title} className="w-full h-[200px] rounded object-none" />

            <h2 className="text-[22px] font-bold">{title}</h2>

            <div className='flex justify-between mt-4'>
                <p className='text-[16px] flex items-center font-medium'>
                    <MdOutlineAccessTime className='mr-2' />
                    {minutes} Minutes
                </p>
                <p className='text-[16px] flex items-center font-medium'>
                    <PiCookingPot className='mr-2' />
                    {servingsCount} Servings
                </p>
            </div>

            <div className='flex justify-between  mt-4'>
                <h3 className='bg-carrot text-white text-[14px] flex items-center px-[28px] h-[30px] my-auto rounded-2xl font-semibold'>{typeFood}</h3>
                <StarRating starsCount={5} style='text-2xl'/>
            </div>


        </div>
    );
}

export default PostCard;