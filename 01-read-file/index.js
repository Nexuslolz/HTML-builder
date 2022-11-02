const fs = require('fs');
const path = require('path');
const { stdout } = require('process');

const file = path.join(__dirname, 'text.txt')
const input = fs.createReadStream(file, 'utf-8')

input.on('data', (err, chunk) => {
    if (err) return console.error(err.message)
    stdout.write(chunk)
})
