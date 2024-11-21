import express, {Request, Response} from "express"

import "./server"

import setInitialRoutes from "./routes/index"

const app = express()
app.use(express.json())
setInitialRoutes(app)
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from setup file")
})

export default app
