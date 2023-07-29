import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "test"
})

app.get("/", (req, res) => {
  res.json("hello this is the backend of Charity food project!")
})

app.get("/", (req, res) => {
  const q = "SELECT * FROM section1"
  db.query(q, (err, result) => {
    if (err) return res.json(err)
    return res.json(result)
  })
})

app.listen(8800, () => {
  console.log("Connected to backend!1")
})
