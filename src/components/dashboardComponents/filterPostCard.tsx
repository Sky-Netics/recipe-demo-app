import { IoIosSearch } from "react-icons/io";


const FilterPostCard = ()=>{

    return(
        <>
        
            <input
                type="text"
                className="border-2 border-slate-700 rounded-md py-2 pl-10 pr-4 mr-[50px] w-[350px] text-[14px]"
                placeholder="Search by name, ingredient"
            />
                <IoIosSearch className="absolute ml-2 transform -translate-y-[25px] text-slate-800" />
    
           
                <select name="category" id="category" className="border py-2 rounded text-gray-400 text-[14px] font-semibold w-[130px] px-2 cursor-pointer">
                    <option disabled selected>Category</option>
                    <option value="MainDishes">Main dishes</option>
                    <option value="Dessert">Dessert</option>
                </select>

                <select name="country" id="country" className="border py-2 rounded text-gray-400 text-[14px] font-semibold w-[130px] px-2 ml-5 cursor-pointer">
                <option value="" disabled selected>Country</option>
                    <option value="American">U.S</option>
                    <option value="Italian">Italia</option>
                    <option value="Italian">Spain</option>
                </select>

        </>
    )

}

export default FilterPostCard