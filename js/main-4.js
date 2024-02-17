 //this will wait for th DOM content to be filly loaded before executing it 
 document.addEventListener('DOMContentLoaded', function() {
	 //function to extract The URL parameters
        function getUrlParams() {
            const urlParams = new URLSearchParams(window.location.search);
            const params = {};
			
			//extracting parameters from the URL
            for (let pair of urlParams.entries()) {
                params[pair[0]] = pair[1];
            }

            return params;
        }
		//this should extract the url parameters from the shop url
        const urlParams = getUrlParams();
        const numberOfProducts = urlParams.numberOfProducts;
        const subtotal = urlParams.subtotal;
        const tps = urlParams.tps;
        const tvq = urlParams.tvq;
        const total = urlParams.total;
		
		//getting the element with ID called 'invoiceDetails'
       const invoiceDetails = document.getElementById('invoiceDetails');
	   
	   //checking if the the invoiceDetails exist before modifying it 
		if (invoiceDetails) {
			//modifying the invoiceDetails content with the extracted URL parameters
		invoiceDetails.innerHTML = `
        <p>Number of Products: ${numberOfProducts}</p>
        <p>Subtotal: ${subtotal}$</p>
        <p>TPS: ${tps}$</p>
        <p>TVQ: ${tvq}$</p>
        <p>Total: ${total}$</p>
    `;
}
    });
	
	//function to validate payment form
	function validatePayment(event) {
		//prevent form submission for now 
    event.preventDefault(); 

    // Get input values
    const cardNumber = document.getElementById('card-number').value;
    const expirationDate = document.getElementById('expiration-date').value;
	const cvvNumber = document.getElementById('Cvv').value;

	//validate card number, expiration date, and CVV number
    if (!validateCardNumber(cardNumber)) {
        alert('Please enter a valid card number. It must be 16 numbers');
        return false;
    }


    if (!validateExpirationDate(expirationDate)) {
        alert('Please enter a valid expiration date (MM/YY format).');
        return false;
    }
	if (!validateCvvNumber(cvvNumber)) {
        alert('Please enter a valid cvv number.');
        return false;
    }

 
    alert('Payment details are valid. Proceeding...');
    document.getElementById('payment-form').submit(); 
}
//function to validate card number format
function validateCardNumber(cardNumber) {

    return /^\d{16}$/.test(cardNumber);
}

//function to validate expiration date format 
function validateExpirationDate(expirationDate) {

    return /^\d{2}\/\d{2}$/.test(expirationDate);
}

//function to validate CVV number format
function validateCvvNumber(cvvNumber) {
   
   return /^\d{3}$/.test(cvvNumber);
}



