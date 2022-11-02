const fs = require('fs')
const path = require('path')

const styleDir = path.join(__dirname, 'styles/')
const newDir = path.join(__dirname, 'project-dist/')

fs.readdir(newDir, (err, files) => {
    if (err) return console.error(err.message)
    files.forEach(file => {
        if (file !== 'index.html')
            fs.unlink(newDir + path.basename(file), (err) => {
                if (err) return console.error(err.message)
            })
    })
})

fs.readdir(styleDir, (err, files) => {
    if (err) return console.error(err.message)
    files.forEach(file => {
        if (path.parse(file).ext.trim() === '.css') {
            fs.writeFile(newDir + 'bundle.css', '', err => {
                if (err) return console.error(err.message)
            })
            fs.readFile(styleDir + file, 'utf-8', (err, data) => {
                if (err) return console.error(err.message)
                fs.appendFile(newDir + 'bundle.css', data, err => {
                    if (err) return console.error(err.message)
                })
            })
        }
    })
})