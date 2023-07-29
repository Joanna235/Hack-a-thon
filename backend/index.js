import express from "express"
import mysql from "mysql"

const app = express()
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "test",
})

app.get("/", (req, res) => {
  res.send("Hello this is the backend!")
})

app.listen(8800, () => {
  console.log("Connected to backend!1")
})
