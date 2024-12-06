import {Typewriter, Cursor} from 'react-simple-typewriter'
import Logo from '../assets/logo-club.png'


export default function Home() {
  return (
    <>
       <div className='w-full h-screen flex items-center justify-center flex-col gap-2'>
              <img src={Logo} alt=" logo du site"className='mb-4 object-contain'  />
              <h1 className='text-4xl text-white font-black mb-2 text-center uppercase flex items-center'>
                <Typewriter typeSpeed={50} words={["bienvenue","au","club","d'aviron","de","bourges"]} loop={0} />
                 <span><Cursor/></span>
              </h1>
              
       </div>
     

    </>
  )
}
