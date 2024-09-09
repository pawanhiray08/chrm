const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('idkwannawhatname best')
})

app.listen(port, () => {
  console.log(`ur replit run in ${port}`)
})

const { exec } = require('child_process');
var yourscript = exec('sh start.sh',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });