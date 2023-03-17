const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const date = document.getElementById('date').value;
  const gender = document.getElementById('gender').value;
  const seatNumber = document.getElementById('seat-number').value;

  let ticket = JSON.parse(localStorage.getItem("ticket")) || [];
  let isSeatBooked = false;
  let lastSeat = null;
  let nextSeat = null;

  // Check if the selected seat is already booked
  for (let i = 0; i < ticket.length; i++) {
    if (ticket[i].seatNumber === seatNumber && ticket[i].date === date) {
      isSeatBooked = true;
      break;
    }
  }
  
  if (isSeatBooked) {
    alert(`Sorry, seat number ${seatNumber} is already booked for ${date}. Please choose another seat.`);
    return;
  }

  // Check if the seat before the selected seat is booked by someone of the same gender
  for (let i = 0; i < ticket.length; i++) {
    if (parseInt(ticket[i].seatNumber) === parseInt(seatNumber) - 1 && ticket[i].gender !== gender) {
      lastSeat = ticket[i];
      break;
    }
  }

  if (lastSeat && lastSeat.gender !== gender) {
    alert(`Sorry, seat number ${parseInt(seatNumber) - 1} is already booked by ${lastSeat.gender}. Please choose another seat.`);
    return;
  }

  // Check if the seat after the selected seat is booked by someone of the same gender
  for (let i = 0; i < ticket.length; i++) {
    if (parseInt(ticket[i].seatNumber) === parseInt(seatNumber) + 1 && ticket[i].gender !== gender) {
      nextSeat = ticket[i];
      break;
    }
  }

  if (nextSeat && nextSeat.gender !== gender) {
    alert(`Sorry, seat number ${parseInt(seatNumber) + 1} is already booked by ${nextSeat.gender}. Please choose another seat.`);
    return;
  }

  // Add the new booking to the ticket array
  let booking = {
    name: name,
    email: email,
    phone: phone,
    from: from,
    to: to,
    date: date,
    gender: gender,
    seatNumber: seatNumber
  };
  ticket.push(booking);

  localStorage.setItem("ticket", JSON.stringify(ticket));

  
  alert('Your ticket is successfully booked.');

  const bookingDetails = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nFrom: ${from}\nTo: ${to}\nDate: ${date}\nGender: ${gender}\nSeat number: ${seatNumber}`;
  alert(bookingDetails);
});
