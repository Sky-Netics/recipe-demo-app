import { useState,useEffect } from "react";
import Recipes from "../interfaces/recipeInterface";
import { useParams } from "react-router-dom";

const GuideRecipes = () => {
    const id:string|undefined = useParams().id
    const domain:string = "http://api.recipeapp.soroushsalari.com/";

    const [recipe,setRecipe] = useState<Recipes>();
    const [steps,setStep] = useState([{},{},{},{}])

    useEffect(()=>{
        fetchData();
    },[]) 
    const fetchData = async()=>{
        const response = await fetch(`${domain}/recipes/recipes/${id}`,{method:"GET"})
        if (response.status===200){
            const result = await response.json();
            setRecipe(result);
        }
    }

    return ( 
        <div className="py-10 px-10 md:px-5 md:grid md:grid-cols-[3fr_4fr] gap-10">
            <div>
                <div><img className="rounded-2xl w-96" src={recipe?.image_url} alt="recipes" /></div>
                <div>
                    <div className="grid grid-cols-4 mt-4">
                        <p>Serving</p>
                        <p>Category</p>
                        <p>CookingTime</p>
                        <p className="ml-6">Country</p>
                    </div>
                    <div className="grid grid-cols-4 mt-2">
                        <p>{recipe?.people_served}</p>
                        <p>{recipe?.category}</p>
                        <p>{recipe?.cooking_time} Minutes</p>
                        <p className="ml-4">{recipe?.category}</p>
                    </div>
                </div>
                <div className="flex gap-10 mt-10">
                    <div className="flex bg-carrot h-10 text-white items-center px-8 rounded-xl cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg>
                        <p>Bookmark</p>
                    </div>
                    <div className="w-32">
                        <p className="font-bold">Recipe Creator</p>
                        <p>{recipe?.user}</p>
                    </div>
                </div>
                <div>
                    <p className="my-6 text-lg font-bold">Share on Social Media</p>
                    <div className="flex gap-10">
                        <div>
                            <svg className="cursor-pointer" width="27" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33 3.20269C31.7864 3.74391 30.4828 4.10959 29.1123 4.27488C30.5264 3.42326 31.5843 2.08292 32.0887 0.50394C30.7601 1.29819 29.3061 1.85726 27.7897 2.15684C26.77 1.06105 25.4194 0.33474 23.9475 0.0906787C22.4756 -0.153382 20.9649 0.0984568 19.6498 0.807097C18.3347 1.51574 17.2889 2.64153 16.6746 4.00969C16.0604 5.37785 15.9122 6.91183 16.2529 8.37347C13.5609 8.23743 10.9273 7.5332 8.52312 6.30649C6.11897 5.07977 3.99796 3.35798 2.29776 1.25286C1.71642 2.26215 1.38215 3.43234 1.38215 4.6786C1.3815 5.80051 1.65601 6.90524 2.18132 7.89477C2.70663 8.8843 3.4665 9.72803 4.39351 10.3511C3.31842 10.3167 2.26706 10.0243 1.32692 9.49832V9.58608C1.32681 11.1596 1.86762 12.6847 2.85757 13.9026C3.84753 15.1205 5.22566 15.9562 6.75813 16.2679C5.76081 16.5395 4.71519 16.5795 3.70026 16.3849C4.13263 17.7388 4.97485 18.9228 6.10901 19.771C7.24317 20.6193 8.61249 21.0893 10.0253 21.1154C7.62699 23.0102 4.66512 24.0381 1.61614 24.0336C1.07604 24.0337 0.536401 24.002 0 23.9385C3.0949 25.9412 6.69758 27.0041 10.377 27C22.8323 27 29.6413 16.6175 29.6413 7.61285C29.6413 7.3203 29.634 7.02483 29.6209 6.73228C30.9454 5.7683 32.0886 4.57459 32.9971 3.20708L33 3.20269Z" fill="#FF785B"/>
                            </svg>
                        </div>
                        <div>
                            <svg className="cursor-pointer" width="27" height="27" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_89_1246)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 16.0893C0 24.044 5.77733 30.6587 13.3333 32V20.444H9.33333V16H13.3333V12.444C13.3333 8.444 15.9107 6.22267 19.556 6.22267C20.7107 6.22267 21.956 6.4 23.1107 6.57733V10.6667H21.0667C19.1107 10.6667 18.6667 11.644 18.6667 12.8893V16H22.9333L22.2227 20.444H18.6667V32C26.2227 30.6587 32 24.0453 32 16.0893C32 7.24 24.8 0 16 0C7.2 0 0 7.24 0 16.0893Z" fill="#FF785B"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_89_1246">
                                <rect width="32" height="32" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </div>
                        <div>
                            <svg className="cursor-pointer" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.4964 8.99808C11.0175 8.99808 8.99454 11.0211 8.99454 13.5C8.99454 15.9789 11.0175 18.0019 13.4964 18.0019C15.9752 18.0019 17.9982 15.9789 17.9982 13.5C17.9982 11.0211 15.9752 8.99808 13.4964 8.99808ZM26.9985 13.5C26.9985 11.6357 27.0154 9.78837 26.9107 7.92748C26.806 5.76602 26.3129 3.84773 24.7324 2.26716C23.1485 0.683215 21.2336 0.19351 19.0722 0.0888138C17.2079 -0.0158819 15.3606 0.00100455 13.4997 0.00100455C11.6355 0.00100455 9.78819 -0.0158819 7.92734 0.0888138C5.76592 0.19351 3.84766 0.686593 2.26712 2.26716C0.683203 3.85111 0.193506 5.76602 0.0888122 7.92748C-0.0158816 9.79174 0.00100453 11.6391 0.00100453 13.5C0.00100453 15.3609 -0.0158816 17.2116 0.0888122 19.0725C0.193506 21.234 0.68658 23.1523 2.26712 24.7328C3.85103 26.3168 5.76592 26.8065 7.92734 26.9112C9.79156 27.0159 11.6389 26.999 13.4997 26.999C15.364 26.999 17.2113 27.0159 19.0722 26.9112C21.2336 26.8065 23.1518 26.3134 24.7324 24.7328C26.3163 23.1489 26.806 21.234 26.9107 19.0725C27.0188 17.2116 26.9985 15.3643 26.9985 13.5ZM13.4964 20.4268C9.66323 20.4268 6.56969 17.3332 6.56969 13.5C6.56969 9.66679 9.66323 6.57319 13.4964 6.57319C17.3295 6.57319 20.423 9.66679 20.423 13.5C20.423 17.3332 17.3295 20.4268 13.4964 20.4268ZM20.7067 7.90722C19.8118 7.90722 19.089 7.18448 19.089 6.2895C19.089 5.39452 19.8118 4.67179 20.7067 4.67179C21.6017 4.67179 22.3244 5.39452 22.3244 6.2895C22.3247 6.50202 22.283 6.7125 22.2018 6.90889C22.1206 7.10528 22.0015 7.28373 21.8512 7.434C21.7009 7.58427 21.5225 7.70342 21.3261 7.78462C21.1297 7.86583 20.9192 7.90749 20.7067 7.90722Z" fill="#FF785B"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <p className="text-lg font-bold my-5">{recipe?.title}</p>
                <p className="font-bold mb-1">Ingredients</p>
                <ul className="list-disc grid grid-cols-2 text-sm space-y-1 ml-5">
                    {recipe?.ingredients.map((ingredient,i)=>{
                        return(<li key={i}>{ingredient}</li>)
                    })}
                </ul>
                <div className="space-y-4">
                    <p className="font-bold mt-5">Procedure</p>
                    {recipe?.procedure.map((step,i)=>{
                        return (
                        <div key={i}>
                            <p className="text-sm font-bold">step {i+1}</p>
                            <p className="text-sm">{step}</p>
                        </div>)
                    })}
                </div>
            </div>
        </div>
     );
}
 
export default GuideRecipes;