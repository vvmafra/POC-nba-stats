import { Request, Response } from "express";
import httpStatus from "http-status"
import * as statsService from "@/services/stats.services"
import { AdjustedStats, CreateStat, Stats } from "@/protocols";

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
    const allStats: CreateStat[] = await statsService.getStats()
    res.status(httpStatus.OK).send(allStats)
}

export async function putStats(req: Request, res: Response){
    const {id} = req.params
    const {player, points, rebounds, assists} = req.body as AdjustedStats
    await statsService.putStats({
        id,
        player, 
        points, 
        rebounds, 
        assists
    })
    res.sendStatus(httpStatus.OK)
}

export async function deleteStats(req: Request, res: Response){
    const id: number = Number(req.params.id);
    await statsService.deleteStats(id)
    res.sendStatus(httpStatus.OK)
}