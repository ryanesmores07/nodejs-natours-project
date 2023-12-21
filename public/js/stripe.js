import axios from 'axios';
import { showAlert } from './alert';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51OLhVMLkspFzUJgfTXTIdQOPSAXlz5VA3KQeXM646DIjYQEVEu28PfVHXO6caZMVpNWoDUOOqP6E4NX35GcxBhVr00s0PliJoH'
  );
  try {
    // 1) Get checkout session from API
    // const session = await axios(
    //   `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    // );
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (error) {
    showAlert('error', error);
  }
};
