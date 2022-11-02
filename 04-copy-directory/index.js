const fs = require('fs')
const path = require('path')

const newDir = path.join(__dirname, 'files-copy/')
const oldDir = path.join(__dirname, 'files')

fs.mkdir('files-copy', { recursive: true }, (err) => {
    if (err) return console.error(err.message)
})
fs.readdir(newDir, (err, files) => {
    if (err) return console.error(err.message)
    files.forEach((file) => {
        fs.unlink(newDir + path.basename(file), (err) => {
            if (err) return console.error(err.message)
        })
    })
})
fs.readdir(oldDir, (err, files) => {
    if (err) return console.error(err.message)
    files.forEach((file) => {
        const lay = path.join(__dirname, 'files', path.basename(file))
        fs.copyFile(lay, newDir + path.basename(file), err => {
            if (err) return console.error(err.message)
        })
    })
})
