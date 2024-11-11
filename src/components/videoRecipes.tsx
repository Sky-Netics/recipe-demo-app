const VideoRecipes = () => {
    return ( 
        <div className="relative w-96 h-96 sm:w-[550px] md:w-[700px] md:h-[450px] lg:w-[850px] mt-6 shadow-2xl">
            <img className="w-full h-full object-cover rounded-xl" src="/images/Rectangle2.png" alt="video" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white size-16 absolute left-1/2 top-1/2 cursor-pointer -translate-x-1/2 -translate-y-1/2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
            </svg>
        </div>
     );
}
 
export default VideoRecipes;