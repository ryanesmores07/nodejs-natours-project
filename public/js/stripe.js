import axios from 'axios';

export const bookTour = async (tourId) => {
  // 1) Get checkout session from API
  const session = await axios(
    `http://127.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
  );

  // 2) Create checkout form + charge credit card
};
