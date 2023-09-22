import fs from "fs"
import path from "path"
import express from "express"

const app = express()
const port = 3001

app.use(express.json())

// Initialize data folder
const dataDir = path.join(__dirname, "data")
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir)
}

app.post("/save", (req, res) => {
  try {
    const data: object = req.body

    // Validate incoming data here
    if (typeof data !== "object") {
      res.status(400).send({ message: "Invalid data format" })
      return
    }

    // rest of the code
  } catch (error) {
    res.status(500).send({ message: "Failed to save data", error })
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
