import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import { CheckOutForm } from './CheckOutForm';


const PUBLIC_KEY ="pk_test_51QRcem063jOPARhnxDcKoBnaRDiuZmhVj4PgO3Udx05VcJogEn5auVzxOZwC7DZ3zwVw3du08B2AkKthq8R3AVG500yJH8FFFn";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    
    <div   > 

        <Elements stripe={stripeTestPromise}>
        <CheckOutForm/>
        </Elements>
    </div>
  )
}
