
// import vector from '../../assets/images/vector.png';
import s from '../../assets/images/s.png';
import v from '../../assets/images/v.png';
export default function Navbar() {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1  ">
                    <a className=" text-[32px] font-bold  italic">RecipeCalories</a>
                    <div className=" w-[100%] flex justify-center ">
                        <div className="space-x-12 mt-2">
                            <a className="btn btn-ghost text-xl border-black rounded-full">Home</a>
                            <a className="btn btn-ghost text-xl border-black rounded-full">Recipes</a>
                            <a className="btn btn-ghost text-xl border-black rounded-full">About</a>
                            <a className="btn btn-ghost text-xl border-black rounded-full">Search</a>
                        </div>
                    </div>
                </div>
                <div className="flex-none gap-2 ">
                    <div className="form-control relative  mr-4">
                        <img className='h-5 w-5 relative top-8 left-40' src={s} alt="" />
                        <input  type="text" placeholder="Search" className="input border-black rounded-[50px] input-bordered w-24 md:w-auto"  />
                      
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="bg-green-400 w-10 rounded-full mt-4">
                                <img src={v} alt= ''/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
