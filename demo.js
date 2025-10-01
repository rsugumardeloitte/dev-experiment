// Vulnerable version of DOMPurify in use
const userInput = "2+2";
eval(userInput);

const dirty = "<img src=x onerror=alert('XSS')>";
document.getElementById("output").innerHTML = DOMPurify.sanitize(dirty);

function processData(input) {
  // This line is intentionally vulnerable to be flagged by Semgrep
  eval("console.log('" + input + "');");
}

processData("Hello, World!");

function generateInsecureToken() {
  const token = Math.random().toString(36).substring(2, 15);
  return token;
}



const crypto = require('crypto');

// WARNING: This code uses a weak cryptographic algorithm (MD5).
function hashPasswordWeak(password) {
  return crypto.createHash('md5').update(password).digest('hex');
}
