import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import Profile1 from '../../assets/Profiles/profile1.webp'
import Profile2 from '../../assets/Profiles/profile2.webp'
import Profile3 from '../../assets/Profiles/profile3.webp'
import StarRating from "../Stars/stars";

const comments = [
  { id: 1, user: "Emily", text: "I think we've been using Taste Bite for a while now and it's an awesome app.It's very easy to use and you can save recipes in it. I think the best thing about this app is that it has alot of categories,so you are ablee to find the perfect recipe for any occassion.", image: Profile1, rate: 2 },
  { id: 2, user: "Sarah", text: "I have a lot of food allergies and i'm always excited to find new recipes that i can cook. Taste Bite has a large collection of recipes with photos, ingredients and instructions.", image: Profile2, rate: 5 },
  { id: 3, user: "Olivia", text: "I have alot of food allergies and allel love this app! I can share my favorite recipes with my friends and family. And it's so easy to use , even my grandmother can do it!rgiesand i'm always excited to fid new recipest that i can cook.Taste Bite has a large collection of recipes with photos, ingredients and instructions.", image: Profile3, rate: 4 },
];

const CarouselCommentBox: React.FC = () => {
  return (
    <div className="w-9/12 mr-5 mb-[100px] mt-4 p-4 rounded-lg max-md:px-0 max-md:w-11/12 ">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]} // Add Autoplay module
        spaceBetween={20}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Set autoplay with 3-second delay
        className="w-full"
      >
        {comments.map((comment) => (
          <SwiperSlide key={comment.id} className="p-4 flex flex-col justify-center items-center rounded-md h-[300px] "> {/* Specify height */}

            <div className="flex justify-center mb-10">
              <StarRating starsCount={comment.rate} style={"text-[35px] px-4"} />
            </div>

            <p className="text-center text-[18px] px-[200px] leading-snug font-light max-lg:px-[100px] max-md:px-[50px]">{comment.text}</p> {/* Center text */}

            <div className="flex items-center justify-center mt-8  ">
              <img src={comment.image} alt='Profile-picture' className="w-16 h-16 rounded-full mb-2 mr-5" /> {/* Optional: Add margin-bottom for spacing */}
              <p className="font-semibold text-[18px]">{comment.user}</p> {/* Center text */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselCommentBox;
