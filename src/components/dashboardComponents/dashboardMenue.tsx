import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const DashboardMenue = ()=>{
    return(
        <div className="px-[80px] pt-9 bg-yellow overflow-y-auto py-1 pb-[68px]">

            <Link to={'/'}>
                <img src={Logo} alt='logo' className='w-[100px]'/>
            </Link>
            

            <div className='pt-10'>
                <h1 className='text-slate-600 text-[16px]'>DASHBOARD</h1>
                <div className='py-8 pl-7'>
                    <h2 className='font-semibold'><Link to={'/dashboard/'}>Dashboard</Link></h2>
                </div>

                <h1 className='text-slate-600 text-[16px]'>RECIPES</h1>
                <div className='py-8 pl-7'>
                    <h2 className='font-semibold w-[80px]'><Link to={'/dashboard/all-recipes'}>All Recipes</Link></h2>
                    <h2 className='mt-6 font-semibold w-[90px]'><Link to={'/dashboard/my-recipes'}>My Recipes</Link></h2>
                </div>

                <h1 className='text-slate-600 text-[16px]'>BOOKMARKS</h1>
                <div className='py-8 pl-7'>
                    <h2 className='font-semibold'><Link to={'/dashboard/favourites'}>Favourites</Link></h2>
                </div>

                <h1 className='text-slate-600 text-[16px]'>PROFILE</h1>
                <div className='py-8 pl-7'>
                    <h2 className='font-semibold'><Link to={'/dashboard/account'}>Account</Link></h2>
                </div>
                
            </div>
            
        </div>
    )
}

export default DashboardMenue