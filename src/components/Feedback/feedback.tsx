import StarRating from "../Stars/stars";
import CarouselCommentBox from '../CarouselCommentBox/carouselCommentBox'

const Feedback = () => {

    return (
        <div className="flex flex-col items-center">
            <h1 className="font-black text-[40px] text-[#333]">What our customers say about us</h1>

            <CarouselCommentBox />
        </div>
    )

}

export default Feedback;