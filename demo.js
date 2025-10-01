//DOMPurify in use

const dirty = "<img src=x onerror=alert('XSS')>";
document.getElementById("output").innerHTML = DOMPurify.sanitize(dirty);

function showMessage() {
    alert("Hello!");
}

