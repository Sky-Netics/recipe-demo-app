import CarouselCommentBox from './carouselCommentBox'

const Feedback = () => {

    return (
        <div className="flex flex-col items-center mt-[100px] max-lg:mt-10">
            <h1 className="font-black text-[40px] text-[#333] max-lg:text-[30px] max-md:text-[24px]">What our customers say about us</h1>

            <CarouselCommentBox />
        </div>
    )

}

export default Feedback;