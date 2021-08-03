import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.use(express.json())

app.get('/hello', (req: express.Request, res: express.Response) => {
  res.send("Hello World !!")
})

app.listen(3000, () => { console.log('Started.') })