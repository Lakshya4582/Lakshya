$(document).ready(function () {
    const forms = document.querySelector('form');
  
    forms.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const names = document.getElementById('name').value;
      const emails = document.getElementById('email').value;
      const phones = document.getElementById('phone').value;
      const froms = document.getElementById('from').value;
      const tos = document.getElementById('to').value;
      const dates = document.getElementById('date').value;
      const genders = document.getElementById('gender').value;
      const seatNumbers = document.getElementById('seat-number').value;
  
      let booking = {
        name: names,
        email: emails,
        phone: phones,
        from: froms,
        to: tos,
        date: dates,
        gender: genders,
        seatNumber: seatNumbers
      }
  
      ticket = JSON.parse(localStorage.getItem("ticket")) || [] ;

      //checked the seat already booked or not
      const SeatisBooked = ticket.some(booking => booking.seatNumber === seatNumbers);
            if (SeatisBooked) {
            alert('Sorry, this seat is already booked. Please choose another seat.');
            return;
        }
      ticket.push(booking);
  
      localStorage.setItem("ticket",JSON.stringify(ticket));
  
      forms.reset();
      alert('Your Ticket is successfully Booked.');
  
      alert(`name: ${names}\nemail: ${emails}\nphone: ${phones}\nfrom: ${froms}\nto: ${tos}\ndate: ${dates}\ngender: ${genders}\nseatnumber: ${seatNumbers}`);
    });
  });
  