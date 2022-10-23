const fs = require('fs')
const path = require('path')

const writableStream = fs.createWriteStream(path.resolve(__dirname, 'output.txt'))

writableStream.write('First line\n')
writableStream.write('Second line\n')
writableStream.end('End line')