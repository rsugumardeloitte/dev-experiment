// Vulnerable version of DOMPurify in use
//const dirty = "<img src=x onerror=alert('XSS')>";
//document.getElementById("output").innerHTML = DOMPurify.sanitize(dirty);
// BAD: Client-side code vulnerable to DOM-based XSS

function setLanguageOptions() {
  var href = document.location.href;
  // Extract a parameter, e.g., 'default=english'
  var deflt = href.substring(href.indexOf("default=") + 8);
  
  // A malicious user could add HTML and script tags to the URL
  document.write("<OPTION value=1>" + deflt + "</OPTION>");
}

// In a real application, this function would likely be called on page load.
setLanguageOptions();
