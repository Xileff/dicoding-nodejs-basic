/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require('fs')
const path = require('path')

const writeStream = fs.createWriteStream(path.resolve(__dirname, 'output.txt'))
const readStream = fs.createReadStream(path.resolve(__dirname, 'input.txt'), {
    highWaterMark: 15
})

readStream.on('readable', () => {
    try {
        const content = readStream.read()
        if(content !== null){
            writeStream.write(`${content}\n`)
        }
    } catch (e) {
        console.error(e)
    }
})