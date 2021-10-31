import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from "./PaymentForm"


const PUBLIC_KEY="pk_test_51JphF0EqtiI4geYD0vTzxLzpblSNa6bTJr32y5W494KBuQpg358ZC1sgPCoofkbDGhlllx5HBNOzR4Q55EUzxsyn007XDd9ZnX"
const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}