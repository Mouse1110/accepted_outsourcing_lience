const express = require('express')
const app = express()
const cors = require('cors')
const port = 2005

app.use(cors())

app.get('/farmext', (req, res) => {
  var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
  var d = new Date(); 
  console.log("===",d.toLocaleString(),"",ip,":::","Truy cập ứng dụng farmext")
  res.send({code:"000",data:"Bạn được quyền truy cập"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//192.168.1.4