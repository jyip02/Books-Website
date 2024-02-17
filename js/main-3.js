let cart = [];// Array to store cart Items

//this function should add a book to the cart
function addToCart(bookName, price) {
    cart.push({ bookName, price });
    alert(`${bookName} added to cart.`);
}

//function to calculate the total cost 
  function calculateTotal() {
            let subtotal = cart.reduce((acc, item) => acc + item.price, 0);
			// this calculates the tax of 5%
            let tps = subtotal * 0.05; 
			//this calculate the tax of 9.975%
            let tvq = subtotal * 0.09975; 

            return {
				//Total number of products in the cart 
                numberOfProducts: cart.length,
				// subtotal amount with 2 decimal places 				
                subtotal: subtotal.toFixed(2),
				// Tps amount with 2 decimal places
                tps: tps.toFixed(2),
				//Tvq the amount with 2 decimal places
                tvq: tvq.toFixed(2),
				// total amount with taxes applied, rounded to 2 decimal places
                total: (subtotal + tps + tvq).toFixed(2),
            };
        }
		// function to rediredct to payment page with total details in query parameters
        function redirectToPayment() {
			// Get total details 
    const totalDetails = calculateTotal();
	// this will create the query parameters
    const queryParams = new URLSearchParams(totalDetails); 
	//this should convert the query parameters to string 
    const queryString = queryParams.toString(); 

	// this should redurect to the payment page with the total details as a query parameters
    window.location.href = `payment.html?${queryString}`;
        }
		//this functions is to search the name of the book with a search bar 
		function searchBooks() {
    // Get the value entered in the search bar
    var searchQuery = document.getElementById("searchBar").value.toLowerCase();

    // Get all the book titles
    var bookTitles = document.querySelectorAll(".books p:first-of-type");

    // Loop through all book titles and hide/show based on the search query
    bookTitles.forEach(function(title) {
        var bookTitle = title.textContent.toLowerCase();
        var bookContainer = title.parentNode;
		
        if (bookTitle.includes(searchQuery)) {
			// Show the book container
            bookContainer.style.display = "block";
        } else {
			// Hide the book container
            bookContainer.style.display = "none"; 
        }
    });
}



