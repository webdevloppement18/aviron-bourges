
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import axios from 'axios'


export const CheckOutForm = () => {
  const stripe = useStripe();
  const element = useElements();


  const handleSubmit = async (event)=>{
    event.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type : "card",
      card : element.getElement(CardElement),
    });
    if(!error) {
      console.log("token Generer: ", paymentMethod)
      // envoi du token au serveur 
      try{
         const { id } = paymentMethod;
         const response =  await axios.post("http://localhost:5173/stripe/charge",
         {
          amount: 1000,
          id: id,
         });
         if ( response.data.sucess)
          console.log(" payement réussit")
      }
       catch (error){
        console.log(" Erreur ! " ,  error)
       }
    }
    else{
      console.log(error.message);
    }
  }
   
   return (
    <form onSubmit={handleSubmit}className="max-w-lg mx-auto space-y-4 mt-3">

         <h3 className="text:md font-black uppercase bg-orange-900 bg-opacity-20 text-orange-500 p-3 rounded:md inline"> pour regler vos licenses et participations  </h3>
         <CardElement className="py-8"
         options={{
           hidePostalCode: true
          
         }}/>

         <button className="bg-[blue] text-[white] mb-4">Payer</button>
        
        


    </form>

   )
  }