const fs = require('fs')
const path = require('path')

const dir = path.join(__dirname, 'secret-folder')

fs.readdir(dir, (err, files) => {
    if (err) return console.error(err.message)
    console.log(`Current directory files: \n`)

    fs.stat(dir, (err, stats) => {
        for (let i = 0; i < files.length; i++) {
            if (path.parse(files[i]).ext.trim() !== '.jpg') {
                if (err) return console.error(err.message)
                let fileName = path.parse(files[i]).name
                let fileExt = path.parse(files[i]).ext
                let fileSize = stats.size
                console.log(`${fileName} - ${fileExt} - ${fileSize}`)
            }
        }
    }
    )
})
