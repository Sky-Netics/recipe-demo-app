import { useState } from "react";
import Navbar from "../components/navbar";
import Recipes from "../components/recipes";

const MoreRecipes = () => {
    const [pagination,setPagination] = useState(1);

    return (<>
        <Navbar />
        <div className="m-16">
            <Recipes pagination={pagination}/>
        </div>
        <div className="flex justify-center gap-3 mb-5">
            <div className="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center bg-neutral-200" onClick={()=>setPagination(1)}>1</div>
            <div className="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center bg-neutral-200" onClick={()=>setPagination(2)}>2</div>
        </div>
    </>
     );
}
 
export default MoreRecipes;