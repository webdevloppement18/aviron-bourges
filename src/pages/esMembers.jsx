import Cards from "./Cards";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";


export default function EspacesMembers() {
  const navigate = useNavigate();

    function handleRetour () {
    navigate('/profile')
  } 


  return (
    <div className='w-full h-screen flex items-center justify-center flex-col gap-2'>

      <button
      onClick={handleRetour}
      

      
      >
      <FaArrowLeft/>  

      </button>
       <Cards/>
      
    </div>
  )
}
