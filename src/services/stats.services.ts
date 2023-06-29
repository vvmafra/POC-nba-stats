import { Stats } from "@/protocols";
import * as statRepository from "@/repositories/stats.repository"


export function createStat(stat: Stats) {
    return statRepository.createStat(stat)
}

export function getStats() {
    return statRepository.getStats()
}