import { Request, Response } from "express";
import httpStatus from "http-status"
import * as statsService from "@/services/stats.services"
import { Stats } from "@/protocols";
import { QueryResult } from "pg";

export async function createStat(req: Request, res: Response){
    const {player, points, rebounds, assists} = req.body as Stats
    await statsService.createStat({
        player, 
        points, 
        rebounds, 
        assists
    })
    res.sendStatus(httpStatus.CREATED)
}

export async function getStats(req: Request, res: Response){
    const allStats: Stats[] = await statsService.getStats()
    res.status(httpStatus.OK).send(allStats)
}

export async function putStats(req: Request, res: Response){

}

export async function deleteStats(req: Request, res: Response){

}