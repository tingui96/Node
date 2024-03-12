const http = require('node:http')
const { findAvailablePort } = require('./free-port.js')
const server = http.createServer((req, res) => {
  console.log('recive')
  res.end('Hola')
})

findAvailablePort(1234).then(port => {
  server.listen(port, () => {
    console.log(`server listening on http://localhost:${port}`)
  })
})
