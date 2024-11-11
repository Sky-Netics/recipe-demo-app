import { useEffect, useRef,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardNavbar from "./dashboardNavbar";


interface Recipes {
    title:string,
    country:string,
    rating:number,
    people_served:number,
    ingredients:string[],
    procedure:string[],
    category:string,
    cooking_time:string,
    image_url:"https://picsum.photos/200/300",
    video_link:"https://picsum.photos/200/300"
}

const EditRecipes = () => {
    const id = useParams().id

    const redirect = useNavigate();

    const domain:string = "http://192.168.1.113:5000/"

    const message = useRef<HTMLDivElement|null>(null);
    const procedureInput = useRef<HTMLInputElement|null>(null);
    const ingredientInput = useRef<HTMLInputElement|null>(null);

    const [newRecipes,setNewRecipes] = useState<Recipes>({
        title:"",
        country:"",
        rating:0,
        people_served:0,
        ingredients:[],
        procedure:[],
        category:"",
        cooking_time:"",
        image_url:"https://picsum.photos/200/300",
        video_link:"https://picsum.photos/200/300"
    })
    const [disable,setDisable] = useState(true);
    const [error,setError] = useState([]);

    useEffect(()=>{
        getRecipes();
    },[])

    const getRecipes = async ()=>{
        const response = await fetch(`${domain}recipes/recipes/${id}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        if (response.status === 200){
            const result = await response.json();
            setNewRecipes(result);
        }
    }

    const saveChanges = async ()=>{
        setDisable(true);
        const response = await fetch(`${domain}recipes/recipes/${id}`,{
            method:"PATCH",
            headers:{
                'Content-Type': 'application/json',
                "Authorization":`Bearer ${localStorage.getItem("access_token")}`
            },
            body:JSON.stringify(newRecipes)
        })
        if (response.status===200){
            redirect("/dashboard")
        }else{
            const result = await response.json();
            setError(result.errors)
            setDisable(false)
            message.current?.classList.remove('hidden');
        }
    }

    const addProcedure = ()=>{
        if (procedureInput.current && procedureInput.current.value.length > 0){
            setNewRecipes({...newRecipes,procedure:[...newRecipes.procedure,procedureInput.current.value]})
            procedureInput.current.value = "";
            if(disable)
                setDisable(false)
        }
    }
    const addIngredient = ()=>{
        if (ingredientInput.current && ingredientInput.current.value.length > 0){
            setNewRecipes({...newRecipes,ingredients:[...newRecipes.ingredients,ingredientInput.current.value]})
            ingredientInput.current.value = "";
            if(disable)
                setDisable(false)
        }
    }

    const closeMessage = ()=>{
        message.current?.classList.add("hidden");
    }

    const deleteFromList = (id:number,listName:string)=>{
        if(disable)
            setDisable(false)
        if (listName==="ingredient")
            setNewRecipes(prevState => ({ ...prevState, ingredients: prevState.ingredients.filter((_, index) => index !== id) }));
        else
            setNewRecipes(prevState => ({ ...prevState, procedure: prevState.procedure.filter((_, index) => index !== id) }));
    }

    const changeRecipesTitle = (value:string)=>{
        if(disable)
            setDisable(false);
        setNewRecipes({...newRecipes,title:value})
    }
    const changeRecipesCategory = (value:string)=>{
        if(disable)
            setDisable(false);
        setNewRecipes({...newRecipes,category:value})
    }
    const changeRecipesCountry = (value:string)=>{
        if(disable)
            setDisable(false);
        setNewRecipes({...newRecipes,country:value})
    }
    const changeRecipesServing = (value:string)=>{
        if(disable)
            setDisable(false);
        setNewRecipes({...newRecipes,people_served:+value})
    }
    const changeRecipesRating = (value:string)=>{
        if(disable)
            setDisable(false);
        setNewRecipes({...newRecipes,rating:+value})
    }
    const changeRecipesTime = (value:string)=>{
        if(disable)
            setDisable(false);
        setNewRecipes({...newRecipes,cooking_time:value})
    }

    return (<>
        <DashboardNavbar />
        <div ref={message} className="hidden w-96 sm:w-[550px] bg-red-100 border-t-4 shadow-md border-red-500 text-red-900 px-4 py-3 rounded absolute top-3 left-1/2 -translate-x-1/2" role="alert">
            <div className="flex gap-14 justify-between">
                <div className="text-sm sm:text-base space-y-1">
                    {error.map((err,i)=>{
                        return <p key={i}>{i+1}_{err}</p>
                    })}
                </div>
                <div className="text-red-900 cursor-pointer" onClick={closeMessage} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
        </div>
        <div>
            <div className="py-6">
                <div className="mx-auto w-96 sm:w-[500px] md:w-[600px] lg:w-[1000px] lg:flex lg:justify-between bg-white px-16 sm:px-20 py-10 rounded-md shadow-2xl">    
                    <div>
                        <div className="mt-3 w-full">
                            <div><label htmlFor="name">Recipes name</label></div>
                            <div><input value={newRecipes.title} onChange={(e)=>{changeRecipesTitle(e.target.value)}} className="border border-black rounded w-full h-9" type="text" id="name" name="name" /></div>
                        </div>
                        <div className="flex gap-2">
                            <div className="mt-3 w-full relative">
                                <div><label htmlFor="category">Category</label></div>
                                <div>
                                    <input value={newRecipes.category} onChange={(e)=>{changeRecipesCategory(e.target.value)}} className="border border-black rounded w-full h-9" list="categorylist" id="category" name="category" />
                                    <datalist id="categorylist">
                                        <option value="Breakfast"/>
                                        <option value="Lunch"/>
                                        <option value="Supper"/>
                                        <option value="Drinks"/> 
                                    </datalist>
                                </div>
                            </div>
                            <div className="mt-3 w-full">
                                <div><label htmlFor="serving">Servings</label></div>
                                <div>
                                    <input value={newRecipes.people_served} onChange={(e)=>{changeRecipesServing(e.target.value)}} list="servinglist" className="border border-black rounded w-full h-9" id="serving" name="serving" />
                                    <datalist id="servinglist">
                                        <option value="1"/>
                                        <option value="2"/>
                                        <option value="3"/>
                                        <option value="4"/>
                                        <option value="5"/>
                                    </datalist>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="mt-3 w-full">
                                <div><label htmlFor="country">Country</label></div>
                                <div>
                                    <input value={newRecipes.country} onChange={(e)=>{changeRecipesCountry(e.target.value)}} list="countrylist" className="border border-black rounded w-full h-9" id="country" name="country" />
                                    <datalist id="countrylist">
                                        <option value="Iran"/>
                                        <option value="USA"/>
                                        <option value="Kenya"/>
                                        <option value="Turkey"/>
                                        <option value="Japan"/>
                                    </datalist>
                                </div>
                            </div>
                            <div className="mt-3 w-full">
                                <div><label htmlFor="rate">Ratings</label></div>
                                <div>
                                    <input value={newRecipes.rating} onChange={(e)=>{changeRecipesRating(e.target.value)}} list="rating" className="border border-black rounded w-full h-9" id="rate" name="rate" />
                                    <datalist id="rating">
                                        <option value="1"/>
                                        <option value="2"/>
                                        <option value="3"/>
                                        <option value="4"/>
                                        <option value="5"/>
                                    </datalist>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 w-full">
                            <div><label htmlFor="timing">Cooking Time</label></div>
                            <div><input value={newRecipes.cooking_time} onChange={(e)=>{changeRecipesTime(e.target.value)}} className="border border-black rounded w-full h-9" type="text" id="timing" name="timing" /></div>
                        </div>
                    </div>
                    <div>
                        <div className="mt-5">
                            <div><label htmlFor="image">Image</label></div>
                            <div className="mt-2 flex">
                                <input className="file:bg-blue-600 text-white file:text-white file:border-none file:px-8 file:py-2 file:rounded-lg" type="file" accept="image/*" id="image" name="image" />
                                <img className="w-10 h-10 rounded-sm" src={newRecipes.image_url} alt="prev img" />
                            </div>
                        </div>
                        <div className="mt-5">
                            <div><label htmlFor="ingredient">Ingredients</label></div>
                            <div className="flex">
                                <input ref={ingredientInput} className="border border-r-0 border-black rounded-l w-full h-9" type="text" name="ingredient" id="ingredient" />
                                <button onClick={addIngredient} className="border border-carrot hover:bg-carrot hover:text-white rounded-r text-carrot px-2">Add</button>
                            </div>
                        </div>
                        <div className="spac-y-1">
                            {newRecipes.ingredients.map((ingredient,i)=>{
                                return (
                                    <div className="flex items-center gap-2" key={i}>
                                        <svg onClick={()=>{deleteFromList(i,"ingredient")}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="cursor-pointer size-4 text-red-400">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                        <p>{ingredient}</p>
                                    </div>
                                )
                            })} 
                        </div>
                        <div className="mt-3">
                            <div><label htmlFor="procedure">Procedure</label></div>
                            <div className="flex">
                                <input ref={procedureInput} className="border border-r-0 border-black rounded-l w-full h-9" type="text" name="procedure" id="procedure" />
                                <button onClick={addProcedure} className="hover:bg-carrot hover:text-white border border-carrot rounded-r text-carrot px-2">Add</button>
                            </div>
                        </div>
                        <div className="spac-y-1">
                            {newRecipes.procedure.map((proced,i)=>{
                                return (
                                    <div className="flex items-center gap-2" key={i}>
                                        <svg onClick={()=>{deleteFromList(i,"procedure")}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="cursor-pointer size-4 text-red-400">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                        <p>{proced}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="mt-16 md:w-1/2">
                            <button onClick={saveChanges} disabled={disable} className="bg-carrot text-white w-full py-2 rounded-2xl">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
 
export default EditRecipes;