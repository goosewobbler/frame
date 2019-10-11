const express = require('express')
// const ipfs = require('../../clients/Ipfs')
const IPFS = require('ipfs-http-client')
const ipfs = IPFS('localhost', '5001')

const app = express()

app.get('/ipfs/*', async (req, res) => {
  
  // Get path and default to index.html
  const pathElements = req.params[0].split('/')
  if (pathElements[1] === '') pathElements[1] = 'index.html'
  const path = pathElements.join('/')
  
  // Get content
  // TODO: Use Stream API instead
  const result = await ipfs.get(path)
  const content = result[0].content

  // If index.html -> inject script
  if (pathElements[1] === 'index.html') {
    console.log('Inject script')
  }
  res.write(content)
  res.end()
})

app.listen(8421)