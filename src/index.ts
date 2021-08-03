import express from 'express'
import cors from 'cors'
import pg from 'pg'


const app = express()
app.use(cors())
app.use(express.json())

const pool = new pg.Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
})

app.get('/', (req: express.Request, res: express.Response) => {
  res.send("OK")
})

app.get('/hello',  async (req: express.Request, res: express.Response) => {
  const client =  await pool.connect()
  const results = await client.query("select * from objects where id= 1")
  console.log(results.rows)
  res.send("Hello\n" + JSON.stringify(results.rows[0]))
})

app.listen(3000, () => { console.log('Started.') })