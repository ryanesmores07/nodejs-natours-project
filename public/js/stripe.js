import axios from 'axios';
// const stripe = Stripe(
//   'pk_test_51OLhVMLkspFzUJgfTXTIdQOPSAXlz5VA3KQeXM646DIjYQEVEu28PfVHXO6caZMVpNWoDUOOqP6E4NX35GcxBhVr00s0PliJoH'
// );

export const bookTour = async (tourId) => {
  // 1) Get checkout session from API
  const session = await axios(
    `http://127.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
  );

  // 2) Create checkout form + charge credit card
};
