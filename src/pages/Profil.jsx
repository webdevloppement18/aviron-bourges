import { useEffect, useState } from "react"
import { auth } from "../firebase/firebaseConfig"
import { db } from "../firebase/firebaseConfig"
import { doc, getDoc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import EditArticles from "../components/EditArticles"



export function Profil () {

      const [userDetails, setUserDetails] =useState (null)
      const navigate = useNavigate()
      
       const fetchUserData = async () => {
        auth.onAuthStateChanged( async (user) => {
            console.log(user)
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()) {
                setUserDetails(docSnap.data());
            }else {
                console.log(" utlisateur non connecter")
            }
        });
       };

       useEffect(() => {
        fetchUserData();
       }, [])

       
      async function handleLogout() {
        try {
            await auth.signOut();
            navigate('/');
            console.log('deconection reussit')

        }catch (error) {
            console.error("errur lors de la requete", error.message)
        }
      }

       function handleMembres (){
        navigate('/membres')
      }

    return(
        <div className='w-full  flex items-center justify-center flex-col gap-2'  >
            {userDetails ?(
                <div className='max-w-[400px] w-full bg-white p-6 rounded-md shadow-md mt-10' >
                   <h3 className="text-6xl "> bonjour {userDetails.firstname}</h3>
                   <div className="mt-10">
                    <p className='text-2xl mb-4 font-bold uppercase text-black-600'> Votre Email : {userDetails.email}</p><br />
                    <p className="text-2xl mb-4 font-bold uppercase text-black-600"> Votre prenom : {userDetails.firstName}</p><br />
                    <p className='text-2xl mb-4 font-bold uppercase text-black-600'> votre nom : {userDetails.lastName}</p>
                   </div>

                   <button  onClick={handleLogout}className="bg-[blue] text-[white] rounded"> se deconnecter</button><br /><br />
                   <button onClick={handleMembres} className="bg-[blue] text-[white] rounded "> acceder a votre espace Membres </button>
                </div>

            ) : (
                <p> chargement....</p>
            )}

            <form>



            </form>
          <EditArticles/>
        </div>

        
    );
}