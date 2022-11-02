const fs = require('fs')
const path = require('path')
// const readline = require('readline');

const { stdin, stdout } = process
// const rl = readline.createInterface({ stdin, stdout });

const dir = path.join(__dirname, 'text.txt')
fs.writeFile(dir, '', (err) => {
    if (err) return console.error(err.message)
    stdout.write('Enter text:>  ')
    process.on('SIGINT', () => {
        stdout.write('\n \n Good Bye')
        process.exit()
    })
})

stdin.on('data', data => {
    const text = data.toString()
    if (text.trim() === 'exit') {
        stdout.write('\n \n Good Bye')
        process.exit()
    } else {
        fs.appendFile(dir, text, (err) => {
            if (err) return console.error(err.message)
        })
        stdout.write('Enter text:>  ')
        process.on('SIGINT', () => {
            stdout.write('\n \n Good Bye')
            process.exit()
        })
    }

})

