//DOMPurify in use

//const dirty = "<img src=x onerror=alert('XSS')>";
document.getElementById("output").innerHTML = DOMPurify.sanitize(dirty);

// Example: intentionally introduce a JSHint error
// (like a missing semicolon or undefined variable)
//hello.setcups.demo = "This will fail"; // <-- JSHint will flag this

// Function to display a message
function showMessage(message) {
    document.getElementById('output').textContent = message;
}

// Call the function
showMessage("JavaScript is running!"); 
