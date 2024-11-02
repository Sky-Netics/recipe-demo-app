import styles from './postCard.module.css'
import { MdOutlineAccessTime } from "react-icons/md";
import { PiCookingPot } from "react-icons/pi";



type Props = {
    imageUrl: string,
    title: string,
    minutes: number,
    servingsCount: number,
    typeFood: string
}

const PostCard = ({ imageUrl, title, minutes, servingsCount, typeFood }: Props) => {
    return (

        <div className={`${styles.boxShadow} w-[330px] h-[400px] p-3 `}>

            <img src={imageUrl} alt={title} className="w-full h-[200px] rounded object-none" />

            <h2 className="text-[22px] font-bold">{title}</h2>

            <div className='flex justify-between mt-4 '>
                <p className='text-[16px] flex items-center font-medium'>
                    <MdOutlineAccessTime className='mr-2' />
                    {minutes} Minutes
                </p>
                <p className='text-[16px] flex items-center font-medium'>
                    <PiCookingPot  className='mr-2'/>
                    {servingsCount} Servings
                </p>
            </div>

            <div>
                <h2>{typeFood}</h2>

            </div>


        </div>
    );
}

export default PostCard;