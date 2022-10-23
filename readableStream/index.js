const fs = require('fs')
const path = require('path')

const readableStream = fs.createReadStream(path.resolve(__dirname, 'article.txt'), {
    highWaterMark: 10 //bytes. Default value is 16384 bytes(16kB)
})

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`)
    } catch (error) {
        // catch the error when the chunk cant be read
    }
})

readableStream.on('end', () => {
    console.log('done')
})