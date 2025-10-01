
const AWS_Access_Code="sadasdasd";
const password = "sadsadasdsad";

// Vulnerable version of DOMPurify in use
const dirty = "<img src=x onerror=alert('XSS')>";
document.getElementById("output").innerHTML = DOMPurify.sanitize(dirty);


const express = require('express');
const app = express();
const port = 3000;

app.get('/search', (req, res) => {
  // BAD: The search query is taken directly from the URL query parameter
  // and written to the response without proper sanitization.
  const searchQuery = req.query.q;

  // This can be exploited with a URL like:
  // http://localhost:3000/search?q=%3Cscript%3Ealert(%27XSS%27)%3C/script%3E
  
  res.send(`
    <h1>Search Results</h1>
    <p>You searched for: ${searchQuery}</p>
  `);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
