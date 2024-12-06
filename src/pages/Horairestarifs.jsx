import { Typewriter,Cursor } from "react-simple-typewriter"
import Logo from '../assets/logo-club.png'
import { useNavigate } from "react-router-dom"

export default function Horairestarifs() {
     const navigate = useNavigate()

     function  handlePayement() {
        navigate ('/payer')
     }

  return (
    <div className='w-full h-screen flex items-center justify-center flex-col gap-2' >
        <img src={Logo} alt="" />
        <h1 className='text-4xl text-white font-black mb-2 text-center uppercase flex items-center' >
            <Typewriter typeSpeed={30} words={["nos","horaires","et","tarifs"]} loop={0}/>
            <span><Cursor/></span>
        </h1>

         <button onClick={handlePayement}> pour payer </button>
         
    </div>
  )
}
