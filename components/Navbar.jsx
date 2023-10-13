'use client'

const Navbar = ()=>{
    return (
       <> 
        <div className="bg-[#000000] w-1/1 h-24 flex flex-col flex-wrap justify-center items-center">
            <img src="" alt="Logo" className="text-white-500 "/>
        </div>    
            <nav class="bg-blue-500 p-4">
                <div class="container mx-auto flex justify-center items-center">
                    <div class="md:flex space-x-4">
                        <a href="#" class="font-semibold text-black hover:text-blue-200 ">Home</a>
                        <a href="#" class="font-semibold text-black hover:text-blue-200 ">Product</a>
                        <a href="#" class="font-semibold text-black hover:text-blue-200 ">About</a>
                        <a href="#" class="font-semibold text-black hover:text-blue-200 ">Contact</a>
                        <div class="relative">
                            <input
                            type="text"
                            placeholder="Search"
                            class="pl-10 pr-3 py-2 rounded-lg border border-gray-300 text-gray-600 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>    
                    </div>
                </div>    
            </nav>
        </>    

        
    )
}

export default Navbar