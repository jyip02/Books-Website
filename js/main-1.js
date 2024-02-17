 //adding an event listener to the form with ID 'quote' for the submit event 
 document.getElementById('quote').addEventListener('submit', function (event) {
            event.preventDefault(); 
            
           
            var name = document.getElementById('nameInput').value;
            var email = document.getElementById('emailInput').value;
            var phone = document.getElementById('phoneInput').value;
            var message = document.getElementById('messageInput').value;

            //displaying an alert indicating successful submission
            alert('Your message has been sent!');
			//resetting the form after submission
			document.getElementById('quote').reset();
        });