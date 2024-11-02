import { useEffect, useRef } from "react";

const Carousel = () => {
    const carousel = useRef<HTMLDivElement | null>(null);
    let carouselWidth:number = 300 ;
    if (window.innerWidth > 500){
        carouselWidth = 400;
    }
    if (window.innerWidth > 780){
        carouselWidth = 600;
    }
    if (window.innerWidth > 1100){
        carouselWidth = 900;
    }
    console.log(carouselWidth)
    

    const next = ()=>{
        if (carousel.current !== null){
            carousel.current.scrollLeft += carouselWidth;
            if (carousel.current.scrollLeft > carouselWidth*2-100){
                carousel.current.scrollLeft = 0;
            }
        }
    }
    const prev = ()=>{
        if (carousel.current !== null){
            if (carousel.current.scrollLeft <= 1){
                carousel.current.scrollLeft += carouselWidth*2;
            }else {
                carousel.current.scrollLeft -= carouselWidth;
            }
        }
    }

    useEffect(()=>{
        const interval = setInterval(() => {
            next()
        },5000);
        return ()=>{clearInterval(interval)}

    },[])

    return ( 
        <div style={{width:`${carouselWidth}px`}} className="mx-auto relative mt-24">
            <p className="text-center text-lg font-extrabold mb-16 md:text-2xl xl:text-4xl">What Our Customer Say About Us</p>
            <div ref={carousel} className="flex overflow-scroll scroll-smooth mx-auto scrollbar-hide">
                <div className="text-center">
                    <div>
                        <div className="flex justify-center"><img className="w-20 h-20 rounded-full" src="https://avatars.githubusercontent.com/u/63696529?s=120&v=4" alt="user1" /></div>
                        <div>
                            <p className="text-xl font-light text-carrot">Harvy Neson</p>
                            <p>student</p>
                        </div>
                    </div>
                    <p style={{width:`${carouselWidth}px`}}>I think we've been using Taste Bite for a while now and it's an awesome app.It's very easy to use and you can save recipes in it. I think the best thing about this app is that it has alot of categories,so you are ablee to find the perfect recipe for any occassion.</p>
                </div>
                <div className="text-center">
                    <div>
                        <div className="flex justify-center"><img className="w-20 h-20 rounded-full" src="https://th.bing.com/th/id/R.718742d70bb5129db9ac83d699cb6aca?rik=sxpvTvzS8%2f2R%2fA&riu=http%3a%2f%2fweknowyourdreams.com%2fimages%2fwife%2fwife-01.jpg&ehk=ue6Y4Uwkuu2f%2fYjBUVhNlR37HO9tk9CcKRrVAtTjLak%3d&risl=&pid=ImgRaw&r=0" alt="user1" /></div>
                        <div>
                            <p className="text-xl font-light text-carrot">Johnson Mwendwa</p>
                            <p>Wife</p>
                        </div>
                    </div>
                    <p style={{width:`${carouselWidth}px`}}>I have a lot of food allergies and i'm always excited to find new recipes that i can cook. Taste Bite has a large collection of recipes with photos, ingredients and instructions.</p>
                </div>
                <div className="text-center">
                    <div>
                        <div className="flex justify-center"><img className="w-20 h-20 rounded-full" src="https://th.bing.com/th/id/R.c571d0e5d938a891fbe1630635ecc38f?rik=7wiUdBkzBOTtpA&pid=ImgRaw&r=0" alt="user1" /></div>
                        <div>
                            <p className="text-xl font-light text-carrot">Colson Walker</p>
                            <p>Chef</p>
                        </div>
                    </div>
                    <p style={{width:`${carouselWidth}px`}}>I have alot of food allergies and allel love this app! I can share my favorite recipes with my friends and family. And it's so easy to use , even my grandmother can do it!rgiesand i'm always excited to fid new recipest that i can cook.Taste Bite has a large collection of recipes with photos, ingredients and instructions.</p>
                </div>
            </div>
            <div onClick={prev} className="cursor-pointer bg-butter rounded-full p-2 absolute top-1/2 left-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                </svg>
            </div>
            <div onClick={next} className="cursor-pointer bg-butter rounded-full p-2 absolute top-1/2 right-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </div>
        </div>
     );
}
 
export default Carousel;