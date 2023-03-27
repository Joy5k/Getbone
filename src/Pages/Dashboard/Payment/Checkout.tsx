import { CardElement,useElements,useStripe } from '@stripe/react-stripe-js'
import React, { useState, FormEvent, useEffect } from 'react'
import { useContext } from 'react';

import { AuthContext } from '../../../context/Authprovider';
import swal from 'sweetalert';
type myData = {
  data: any;
}
const Checkout = ({ data }: myData) => {
  const { user } = useContext(AuthContext);
  const name ='name'in user ? user.displayName :null
  const image = 'image' in data ? data.image : null;
  console.log(user,'the persone name is',name);

  const { price,email  } = data;
    const stripe = useStripe();
    const elements = useElements();
    const [cardError,setCardError]=useState<string>('');
  const [clientSecret, setClientSecret] = useState("");
  
    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("https://getbone-server-joy5k.vercel.app/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({price}), 
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, [price]);
  
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        } 

        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        const result = await stripe.createToken(card);

        if (result.error) {
            console.log(result.error);
            setCardError(result.error.message || 'There was an error processing your payment.');
      }
      const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              email: email,
              name:name,
            },
          },
        },
      );
      if (confirmError) {
        setCardError('error')
        return
      }
      else {
        console.log(paymentIntent,'Yes you did it');
      }
      if (paymentIntent.status==="succeeded") {
        // alert('Yay')
        swal('YAY!', 'Your Payment was successfully completed', 'success')
        fetch('http://localhost:5000/payment', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(data)
        }
        )
          .then(res => res.json())
          .then(data => {
            console.log(data,'this is the payment details');
          })
      }
    }

    return (
      <div className='w-96 mx-auto my-4 mb-12 bg-white p-4'>
              <form onSubmit={handleSubmit}>
    <CardElement
      options={{
                        style: {
                            base: {
                                fontSize: '20px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
          />
         
          <span className='text-red-600'>{cardError}</span>
          
          <button className='bg-blue-500 w-full p-4 hover:rounded-lg
     hover:bg-yellow-400 mt-6' type="submit" disabled={!stripe}>
      Pay
    </button>
        </form>
      </div>
    )
}

export default Checkout