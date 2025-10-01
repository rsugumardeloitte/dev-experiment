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

// This function uses predictable Math.random() to generate a 'secret' for a user.
// The flow is more complex than a simple standalone function.
function assignInsecureUserSecret(user) {
  // A CodeQL query would look for this kind of "randomness" used in a security context.
  const secret = Math.random().toString(36).substring(2, 15);
  user.sessionSecret = secret;
  console.log(`Assigned secret to user ${user.id}: ${secret}`);
}

const user = { id: 123 };
assignInsecureUserSecret(user);



const crypto = require('crypto');

// This example is more likely to be flagged as the token is generated in a clear security context.
function generateWeakSessionToken(data) {
  const hash = crypto.createHash('md5').update(data).digest('hex');
  return hash;
}



const express = require('express');
const { execSync } = require('child_process');
const app = express();

app.get('/unsafe-command', (req, res) => {
  const userFile = req.query.file;
  try {
    // This direct use of a system call with unsanitized user input is a prime target for CodeQL.
    const result = execSync('cat ' + userFile, { encoding: 'utf-8' });
    res.send(result);
  } catch (error) {
    res.status(500).send('Error executing command');
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));


const { exec } = require('child_process');
const express = require('express');
const app = express();

// WARNING: This code is vulnerable to CodeQL flagging for command injection.
app.get('/view-file', (req, res) => {
  const file = req.query.filename;
  exec(`cat ${file}`, (error, stdout, stderr) => {
    if (error) {
      res.send(`Error: ${error.message}`);
      return;
    }
    res.send(stdout);
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

const crypto = require('crypto');

// WARNING: This code uses a weak cryptographic algorithm (MD5).
function hashPasswordWeak(password) {
  return crypto.createHash('md5').update(password).digest('hex');
}
