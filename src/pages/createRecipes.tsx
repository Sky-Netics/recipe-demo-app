import { useRef, useState } from "react";
import DashboardNavbar from "../components/dashboardNavbar";

const CreateRecipes = () => {
    const [ingredients,setIngredients] = useState<string[]>([]);
    const [procedure,setProcedure] = useState<string[]>([]);

    const ingredientInput = useRef<HTMLInputElement|null>(null);
    const procedureInput = useRef<HTMLInputElement|null>(null);

    const addProcedure = ()=>{
        if (procedureInput.current)
            setProcedure([...procedure,procedureInput.current.value])
    }
    const addIngredient = ()=>{
        if (ingredientInput.current)
            setIngredients([...ingredients,ingredientInput.current.value])
    }

    return ( 
        <div className="bg-gray-300">
            <DashboardNavbar />
            <div className="py-6">
                <div className="mx-auto w-96 sm:w-[500px] md:w-[600px] bg-white px-16 sm:px-20 py-10 rounded-md shadow-2xl">    
                    <div className="mt-3 w-full">
                        <div><label htmlFor="name">Recipes name</label></div>
                        <div><input className="border border-black rounded w-full h-9" type="text" id="name" name="name" /></div>
                    </div>
                    <div className="flex gap-2">
                        <div className="mt-3 w-full relative">
                            <div><label htmlFor="category">Category</label></div>
                            <div>
                                <input className="border border-black rounded w-full h-9" list="categorylist" id="category" name="category" />
                                <datalist id="categorylist">
                                    <option value="Broiling"/>
                                    <option value="Grilled"/>
                                    <option value="Frying"/>
                                    <option value="Baking"/>
                                    <option value="Roasting"/>
                                </datalist>
                            </div>
                        </div>
                        <div className="mt-3 w-full">
                            <div><label htmlFor="serving">Servings</label></div>
                            <div>
                                <input list="servinglist" className="border border-black rounded w-full h-9" id="serving" name="serving" />
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
                                <input list="countrylist" className="border border-black rounded w-full h-9" id="country" name="country" />
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
                                <input list="rating" className="border border-black rounded w-full h-9" id="rate" name="rate" />
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
                        <div><input className="border border-black rounded w-full h-9" type="text" id="timing" name="timing" /></div>
                    </div>
                    <div className="mt-5">
                        <div><label htmlFor="image">Image</label></div>
                        <div className="mt-2"><input className="file:bg-blue-600 file:text-white file:border-none file:px-8 file:py-2 file:rounded-lg" type="file" accept="image/*" id="image" name="image" /></div>
                    </div>
                    <div className="mt-5">
                        <div><label htmlFor="ingredient">Ingredients</label></div>
                        <div className="flex">
                            <input ref={ingredientInput} className="border border-r-0 border-black rounded-l w-full h-9" type="text" name="ingredient" id="ingredient" />
                            <button onClick={addIngredient} className="border border-carrot hover:bg-carrot hover:text-white rounded-r text-carrot px-2">Add</button>
                        </div>
                    </div>
                    <div className="spac-y-1">
                        {ingredients.map((ingredient,i)=>{
                            return (
                                <p key={i}>{i+1}_{ingredient}</p>
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
                        {procedure.map((proced,i)=>{
                            return (
                                <p key={i}>{i+1}_{proced}</p>
                            )
                        })}
                    </div>
                    <div className="mt-16 md:w-1/2">
                        <button className="bg-carrot text-white w-full py-2 rounded-2xl">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default CreateRecipes;