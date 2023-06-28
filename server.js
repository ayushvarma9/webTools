const express = require('express');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/execute', (req, res) => {
  const command = req.body.command;

  const scriptPath = path.join(__dirname, 'executeCommand.sh');
  exec(`bash ${scriptPath} "${command}"`, (error, stdout, stderr) => {
    if (error) {
      res.send('An error occurred while executing the command.');
    } else {
      res.send(stdout);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
