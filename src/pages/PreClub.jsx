import { Typewriter, Cursor } from "react-simple-typewriter"
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Logo  from '../assets/logo-club.png'

export default function PreClub() {

    const navigate = useNavigate()

    function handLogout () {
        navigate('/')
    }
    
  return (
    <div className='w-full h-screen flex items-center justify-center mt-10 flex-col gap-2'>

        <button className="bg-[blue] px-3 py-3 rouded hover:bg-[red-500]" onClick={handLogout}>
            <FaArrowLeft/>
        </button>
        <img src={Logo} alt="logo du site " className='mb-4 object-contain'/>
       <h1 className='text-4xl text-white font-black mb-2 text-center uppercase flex items-center' > 
        <Typewriter typeSpeed={30} words={["présentation","du","club"]} loop={0}></Typewriter>
        <span><Cursor/></span>
       </h1>

         <p className="mt-10 ">
         <p className="italic font-semibold text-2xl text-[white]">Créé en 1976 sous le nom d’ANMB, le club a changé de nom en 1997 pour devenir ACB. Les installations actuelles, inaugurées en 1991, ont permis la formation de nombreux rameurs qui se sont illustrés dans diverses compétitions nationales et internationales grâce à la qualité de leurs équipements. Parmi les titres de champions de France et du monde, ainsi que des sélections en équipe nationale, mettant à l’honneur des sportifs de haut niveau comme Cédric Chaumont, Frédéric Doucet ou encore Christophe Jeanton, pour ne citer qu’eux. Cet héritage perdure aujourd’hui, comme en témoignent les médailles remportées aux championnats de France cadets et juniors. 
                Vous pouvez vous rassurer en sachant que même si vous ne vous considérez pas comme un champion, l’aviron peut être pratiqué comme un loisir. Cette activité vous permettra de découvrir certaines des plus belles rivières de France au travers de randonnées tranquilles privilégiant la détente et la camaraderie. L’aviron est un sport complet qui peut être pratiqué par des personnes de tout âge, de tout niveau et en toute saison.</p>
              
         </p>

       </div>
  )
}
