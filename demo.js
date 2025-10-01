// Vulnerable version of DOMPurify in use
const dirty = "<img src=x onerror=alert('XSS')>";
document.getElementById("output").innerHTML = DOMPurify.sanitize(dirty);

function processData(input) {
  // This line is intentionally vulnerable to be flagged by Semgrep
  eval("console.log('" + input + "');");
}

processData("Hello, World!");
