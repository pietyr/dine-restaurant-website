import Header from '../components/header';
import Footer from '../components/footer';

export default function Booking() {
  const booking = document.createElement('div');

  booking.appendChild(
    Header(
      'Reservations',
      'We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.',
      'booking',
    ),
  );

  booking.appendChild(Footer());

  return booking;
}
