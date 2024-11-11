

const AccountComponent = ()=>{
    return(
        <form className="w-6/12 bg-white mt-8 h-[480px] mx-auto py-7">
            
            <div className="flex px-5">

                <div className="flex flex-col w-1/2 px-4 py-5">
                    <label htmlFor="username" className="text-[14px] font-medium">Username</label>
                    <input type="text" id="username" className="border w-[230px] mt-5 border-gray-300 px-3 py-1.5 rounded-md" placeholder="Tony"/>
                </div>

                <div className="flex flex-col w-1/2 px-4 py-5">
                    <label htmlFor="email" className="text-[14px] font-medium">Email</label>
                    <input type="text" id="username" className="border w-[230px] mt-5 border-gray-300 px-3 py-1.5 rounded-md" placeholder="Tony@gmail.com"/>
                </div>

            </div>
            
            <div className="flex flex-col ml-10 mt-6">
                <label htmlFor="">Profile Picture</label>
                <input type="file" className="border rounded-md py-8 px-4 w-5/12"/>
            </div>

            <button className="bg-carrot text-white font-semibold text-[14px] ml-10 mt-14 px-14 py-2 rounded-3xl">Save changes</button>

        </form>
    )
}

export default AccountComponent