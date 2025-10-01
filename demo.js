const AWS_SECRET_ACCESS_KEY = "12345-Secret";
eval("console.log('Insecure')");
// Vulnerable version of DOMPurify in use
const dirty = "<img src=x onerror=alert('XSS')>";
document.getElementById("output").innerHTML = DOMPurify.sanitize(dirty);
