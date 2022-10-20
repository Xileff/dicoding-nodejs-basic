// 1. Contoh ini ga jalan
// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });

// 2. Contoh buat akses process(salah satu global object)
const cpuInformation = process.memoryUsage();
 
console.log(cpuInformation, process.argv);

// 3. Passing argumen ke process
// Coba execute perintah ini di terminal
// node .\app.js Felix Savero
// const firstName = process.argv[2];
// const lastName = process.argv[3];
 
// console.log(`Hello ${firstName} ${lastName}`);