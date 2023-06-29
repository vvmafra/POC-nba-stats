import express, { json, Request, Response } from "express";
import httpStatus from "http-status"
import statsRouter from "@/routers/stats.router";

const app = express()
app.use(json())

app.get("/health", (req: Request, res: Response) => {
    res.sendStatus(httpStatus.OK)
})
app.use(statsRouter)

const port: number = parseInt(process.env.PORT) || 5000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})