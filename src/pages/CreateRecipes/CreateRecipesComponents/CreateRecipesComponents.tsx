import { useState, useEffect } from "react"

type RecipesData={
    title: string,
    country: string,
    rating: number,
    ingredients: string[],
    procedure: string[],
    people_served: number,
    category: string,
    cooking_time: string,
    image_url: string,
    video_link: string
}

const CreateRecipesComponent = () =>{

    const [title, setTitle] = useState<string>('')
    const [category, setCategory] = useState<string>('')
    const [serving, setServing] = useState<number>(0)
    const [country, setCountry] = useState<string>('')
    const [cookingTime, setCookingTime] = useState<string>('')
    const [rating, setRating] = useState<number>(0)
    const [videoTutorialURL, setVideoTutorialURL] = useState<string>('')
    const [imageUrl, setImageUrl] = useState<string>('')
    const [ingredients, setIngredients] = useState<any>([""])
    const [procedure, setProcedure] = useState<any>([""])



    useEffect(() => {
        setCategory('Breakfast')
        setServing(1)
        setCountry('American')
        setCookingTime('20 minutes')
        setRating(3)
        setImageUrl('https://www.thespruceeats.com/thmb/7SC0hL8yeDFXc33yBTL-3pQD2hQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kabob-koobideh-5224493-hero-01-5361a7c7978c459eb5b9801ebbcc8a22.jpg')
    }, [])

    const CreateRecipe = ()=>{

        const recipesData: RecipesData = {
            title,
            country,
            rating,
            ingredients,
            procedure,
            people_served: serving,
            category,
            cooking_time: cookingTime,
            image_url: imageUrl,
            video_link: videoTutorialURL
        }

        console.log(recipesData)

        const apiUrl = 'http://api.recipeapp.soroushsalari.com/recipes/recipes'
        const tokenData = localStorage.getItem('access-token')
        const token = tokenData ? JSON.parse(tokenData).token : '';


        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(recipesData)
        })
        .then((response) => {
            console.log('Response:', response);
            if (!response.ok) {
                return response.text().then(text => {
                    throw new Error('Network response was not ok: ' + response.statusText + '. Response: ' + text);
                });
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
        })

        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });   

    }


    return(
        <div className="w-[900px] h-[605px] bg-white mx-auto rounded-lg">
            
            <div className="py-6 px-4">


            <div className="flex flex-wrap">

                <div className="flex flex-col w-[250px] mr-6">
                    <label htmlFor="recipes-name" className="text-[14px] font-semibold mb-1">Recipe name</label>
                    <input 
                    type="text" 
                    className="border rounded-md py-0.5 px-2" 
                    id="recipes-name"
                    onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>

                <div className="flex flex-col mr-6">
                    <label className="mb-1 text-[14px] font-semibold">Category</label>
                    <select 
                    className="border w-[150px] py-0.5 px-2 rounded-md text-gray-600"
                    onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                    </select>
                </div>

                <div className="flex flex-col mr-6">
                    <label className="text-[14px] font-semibold mb-1">Servings</label>
                    <select 
                    className="border w-[150px] py-0.5 px-2 rounded-md text-gray-600"
                    onChange={(e)=>setServing(Number(e.target.value))}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                
                <div className="flex flex-col mr-4">
                    <label className="text-[14px] font-semibold mb-1">Country</label>
                    <select 
                    className="border rounded-md w-[150px] py-0.5 px-2 text-gray-600"
                    onChange={(e)=>setCountry(e.target.value)}
                    >
                        <option value="American">American</option>
                        <option value="Italian">Italian</option>
                        <option value="Iranian">Iranian</option>
                    </select>
                </div>

                <div className="flex flex-col mr-4 my-4">
                    <label className="text-[14px] font-semibold mb-1">Cooking Time</label>
                    <select 
                    className="border rounded-md w-[150px] py-0.5 px-2 text-gray-600"
                    onChange={(e)=>setCookingTime(e.target.value)}
                    >
                        <option value="20 minutes">20 minutes</option>
                        <option value="30 minutes">30 minutes</option>
                    </select>
                </div>

                <div className="flex flex-col mr-4 my-4">
                    <label className="text-[14px] font-semibold mb-1">Ratings</label>
                    <select 
                    className="border rounded-md w-[90px] py-0.5 px-2 text-gray-600"
                    onChange={(e)=>setRating(Number(e.target.value))}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div className="flex flex-col mr-4 my-4">
                    <label className="text-[14px] font-semibold mb-1">Video Tutorial URL</label>
                    <input 
                    type="text"  
                    className="border rounded-md py-0.5"
                    onChange={(e)=>setVideoTutorialURL(e.target.value)}
                    />
                </div>

            </div>

            <div>


            <div className="w-[300px]">

                <div className="flex flex-col mr-4 my-4">
                    <label className="text-[14px] font-semibold mb-1">Image</label>
                    <input type="file" className="border rounded-md py-8 px-4"/>
                </div>

            </div>

            
         
               
                <div className="flex">

                <div className="w-3/6 flex flex-col">
                    <h1>Ingredients</h1>

                    <input type="text" 
                    className="border-2 placeholder-gray-600 py-1 px-6 mt-3 w-[320px]"
                    placeholder="step1"
                    onChange={(e) => setIngredients(e.target.value)}
                    />

                    <input type="text" 
                    className="border-2 placeholder-gray-600 py-1 px-6 mt-3 w-[320px]"
                    placeholder="step2"
                    />

                <input type="text" 
                    className="border-2 placeholder-gray-600 py-1 px-6 mt-3 w-[320px]"
                    placeholder="step3"
                />

                <button className="w-2/6 mt-3 py-2 rounded-3xl border-2 text-carrot font-semibold border-carrot">Add ingredient</button>

                </div>


                <div className="w-3/6 flex flex-col">
                    <h1>Procedure</h1>

                    <input type="text" 
                    className="border-2 placeholder-gray-600 py-1 px-6 mt-3 w-[320px]"
                    placeholder="step1"
                    onChange={(e)=>setProcedure(e.target.value)}
                    />

                    <input type="text" 
                    className="border-2 placeholder-gray-600 py-1 px-6 mt-3 w-[320px]"
                    placeholder="step2"
                    />

                <input type="text" 
                    className="border-2 placeholder-gray-600 py-1 px-6 mt-3 w-[320px]"
                    placeholder="step3"
                    />

                <button className="w-2/6 mt-3 py-2 rounded-3xl border-2 text-carrot font-semibold border-carrot">Add Procedure</button>

                </div>

                </div> 
            </div>
            
            </div>

            <div className="flex justify-end">
                <button 
                className="mr-8 bg-carrot text-white px-4 py-1 rounded-3xl"
                onClick={()=>CreateRecipe()}
                >Save Changes</button>
            </div>
            
        </div>
    )
}

export default CreateRecipesComponent