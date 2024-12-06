import {NavLink} from 'react-router-dom'
import Logo from '../assets/logo-club.png'


export default function Navbar() {
   
    const navLinkStyle = ({isActive}) =>{
        return{
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }


  return (
    <nav className="w-full h-16 flex  items-center jusitfy-between space-x-4 bg-[white] px-3 py-6 mt-2" >
        <img src={Logo} alt='logo du site' className='w-10 h-10'/>
       <NavLink style={navLinkStyle} className='text-[red-500] font-semibold' to='/'>Acceuil </NavLink>
        <NavLink style={navLinkStyle} className='text-[red-500] font-semibold' to='/presentation'>présentation du club </NavLink>
        <NavLink style={navLinkStyle} className='text-[red-500] font-semibold' to='/horaires'> horaires et tarifs </NavLink>
        <NavLink  style={navLinkStyle} className='text-[red-500] font-semibold'to='/register'> devenir Membres du site</NavLink>
        <NavLink  style={navLinkStyle} className='text-[red-500] font-semibold'to='/login'> Se connecter </NavLink>
        <NavLink style={navLinkStyle} className='text-[red-500] font-semibold' to='/formulaire'> Contacts </NavLink>
        
    </nav>
  )
}
