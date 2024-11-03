import { useState } from "react";
import { Link } from "react-router-dom";

import Star from "../components/star";
import DashboardNavbar from "../components/dashboardNavbar";


const MyRecipes = () => {
    const [recipe,setRecipe] = useState([{},{},{},{}])

    return ( 
        <>
            <DashboardNavbar />
            <div className="xl:ml-60">
                <div className="flex justify-end mr-14 mt-6">
                    <button className="bg-carrot text-white py-2 px-4 rounded-2xl flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Create new recipe
                    </button>
                </div>
                <div className="flex gap-1 sm:gap-6 md:gap-10 items-center px-4 mt-8">
                    <div className="flex items-center gap-2 border-2 rounded h-10 w-72">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-400 size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <input className="w-full" type="text" placeholder="Search by name, ingredient"/>
                    </div>
                    <div className="flex px-2 items-center gap-2 border-2 rounded h-10 w-24">
                        <input className="w-full" type="text" placeholder="Category"/>
                        <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 0H0L2.85714 4L6 0Z" fill="#333333"/>
                        </svg>
                    </div>
                    <div className="flex px-2 items-center gap-2 border-2 rounded h-10 w-24">
                        <input className="w-full" type="text" placeholder="Country"/>
                        <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 0H0L2.85714 4L6 0Z" fill="#333333"/>
                        </svg>
                    </div>
                </div>
                <div className="p-8">
                    <p className="font-extrabold">All Recipes</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-8">
                        {recipe.map((p,i)=>{
                            return (
                                <div className="shadow-2xl rounded p-4" key={i}>
                                    <div><img src="/images/meal.jpeg" alt={`meal_${i}`} /></div>
                                    <div>
                                        <p className="text-xl font-bold my-5">HomeMade Potato Chips</p>
                                        <div className="flex justify-between">
                                            <div className="flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                                <p>20 Minutes</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.84375 3.1875V1.0625C5.84375 0.921604 5.89972 0.786478 5.99935 0.68685C6.09898 0.587221 6.23411 0.53125 6.375 0.53125C6.5159 0.53125 6.65102 0.587221 6.75065 0.68685C6.85028 0.786478 6.90625 0.921604 6.90625 1.0625V3.1875C6.90625 3.3284 6.85028 3.46352 6.75065 3.56315C6.65102 3.66278 6.5159 3.71875 6.375 3.71875C6.23411 3.71875 6.09898 3.66278 5.99935 3.56315C5.89972 3.46352 5.84375 3.3284 5.84375 3.1875ZM8.5 3.71875C8.6409 3.71875 8.77602 3.66278 8.87565 3.56315C8.97528 3.46352 9.03125 3.3284 9.03125 3.1875V1.0625C9.03125 0.921604 8.97528 0.786478 8.87565 0.68685C8.77602 0.587221 8.6409 0.53125 8.5 0.53125C8.35911 0.53125 8.22398 0.587221 8.12435 0.68685C8.02472 0.786478 7.96875 0.921604 7.96875 1.0625V3.1875C7.96875 3.3284 8.02472 3.46352 8.12435 3.56315C8.22398 3.66278 8.35911 3.71875 8.5 3.71875ZM10.625 3.71875C10.7659 3.71875 10.901 3.66278 11.0007 3.56315C11.1003 3.46352 11.1563 3.3284 11.1563 3.1875V1.0625C11.1563 0.921604 11.1003 0.786478 11.0007 0.68685C10.901 0.587221 10.7659 0.53125 10.625 0.53125C10.4841 0.53125 10.349 0.587221 10.2494 0.68685C10.1497 0.786478 10.0938 0.921604 10.0938 1.0625V3.1875C10.0938 3.3284 10.1497 3.46352 10.2494 3.56315C10.349 3.66278 10.4841 3.71875 10.625 3.71875ZM16.7875 6.8L14.875 8.23438V12.2188C14.8733 12.7818 14.6488 13.3213 14.2507 13.7194C13.8525 14.1176 13.3131 14.342 12.75 14.3438H4.25C3.68696 14.342 3.14747 14.1176 2.74934 13.7194C2.3512 13.3213 2.12675 12.7818 2.125 12.2188V8.23438L0.212502 6.8C0.0997852 6.71546 0.0252672 6.58961 0.0053415 6.45013C-0.0145842 6.31065 0.0217144 6.16897 0.106252 6.05625C0.19079 5.94353 0.316642 5.86902 0.456122 5.84909C0.595602 5.82916 0.737285 5.86546 0.850002 5.95L2.125 6.90625V5.84375C2.125 5.56196 2.23694 5.29171 2.4362 5.09245C2.63546 4.89319 2.90571 4.78125 3.1875 4.78125H13.8125C14.0943 4.78125 14.3645 4.89319 14.5638 5.09245C14.7631 5.29171 14.875 5.56196 14.875 5.84375V6.90625L16.15 5.95C16.2627 5.86546 16.4044 5.82916 16.5439 5.84909C16.6834 5.86902 16.8092 5.94353 16.8938 6.05625C16.9783 6.16897 17.0146 6.31065 16.9947 6.45013C16.9747 6.58961 16.9002 6.71546 16.7875 6.8ZM13.8125 5.84375H3.1875V12.2188C3.1875 12.5005 3.29944 12.7708 3.4987 12.9701C3.69796 13.1693 3.96821 13.2812 4.25 13.2812H12.75C13.0318 13.2812 13.302 13.1693 13.5013 12.9701C13.7006 12.7708 13.8125 12.5005 13.8125 12.2188V5.84375Z" fill="black"/>
                                                </svg>
                                                <p>4 Servings</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center my-5">
                                            <div>
                                                <Link className="text-white bg-carrot px-6 py-1 rounded-3xl" to="">American</Link>
                                            </div>
                                            <div>
                                                <Star stars={3}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>
                                            <p>Edit</p>
                                        </div>
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                            <p>Delete</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default MyRecipes;