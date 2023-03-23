import { CardElement,useElements,useStripe } from '@stripe/react-stripe-js'
import React ,{useState,FormEvent} from 'react'

const Checkout = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError,setCardError]=useState<string>('');

  console.log('page reloading');
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
                <span className='text-red-600'>{cardError }</span>
    <button className='bg-blue-500 w-full p-4 hover:rounded-lg hover:bg-yellow-400' type="submit" disabled={!stripe}>
      Pay
    </button>
        </form>
      </div>
    )
}

export default Checkout