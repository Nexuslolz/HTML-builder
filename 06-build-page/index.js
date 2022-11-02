const fs = require('fs')
const path = require('path')

const styleDir = path.join(__dirname, 'styles/')
const newDir = path.join(__dirname, 'project-dist/')
const oldDir = path.join(__dirname, 'assets')
const mainDir = path.join(__dirname)

fs.readdir(newDir, (err, files) => {
    if (err) return console.error(err.message)
    files.forEach((file) => {
        fs.unlink(newDir + path.basename(file), (err) => {
            if (err) return console.error(err.message)
        })
    })

})

fs.mkdir('project-dist', { recursive: true }, (err) => {
    if (err) return console.error(err.message)
})

fs.readdir(oldDir, (err, files) => {
    if (err) return console.error(err.message)
    fs.mkdir(newDir + 'assets', { recursive: true }, (err) => {
        if (err) return console.error(err.message)
    })

})

fs.mkdir(newDir + 'assets/' + 'fonts', { recursive: true }, (err) => {
    if (err) return console.error(err.message)
})
fs.mkdir(newDir + 'assets/' + 'img', { recursive: true }, (err) => {
    if (err) return console.error(err.message)
})
fs.mkdir(newDir + 'assets/' + 'svg', { recursive: true }, (err) => {
    if (err) return console.error(err.message)
})

fs.readdir(`${oldDir}/fonts`, (err, files) => {
    if (err) console.error(err.message)
    files.forEach(file => {
        const lay = path.join(__dirname, 'assets/fonts', path.basename(file))
        fs.copyFile(lay, `${newDir}/assets/fonts${path.basename(file)}`, err => {
            if (err) return console.error(err.message)
        })
    })
})


fs.readdir(mainDir, (err, files) => {
    if (err) return console.error(err.message)
    files.forEach((file) => {
        if (path.basename(file) === 'template.html') {
            const lay = path.join(__dirname, file)
            fs.copyFile(lay, newDir + path.basename(file), err => {
                if (err) return console.error(err.message)
            })
        }
    })
})

fs.readdir(styleDir, (err, files) => {
    if (err) return console.error(err.message)
    files.forEach(file => {
        if (path.parse(file).ext.trim() === '.css') {
            fs.writeFile(newDir + 'style.css', '', err => {
                if (err) return console.error(err.message)
            })
            fs.readFile(styleDir + file, 'utf-8', (err, data) => {
                if (err) return console.error(err.message)
                fs.appendFile(newDir + 'style.css', data, err => {
                    if (err) return console.error(err.message)
                })
            })
        }
    })
})

