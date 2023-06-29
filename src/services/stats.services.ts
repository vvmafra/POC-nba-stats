import * as statsRepository from "@/repositories/stats.repository"


export async function createStat({player, points, rebounds, assists}) {
    return statsRepository.createStat({
        player, 
        points, 
        rebounds, 
        assists
    })
}

export async function getStats() {
    const stats = statsRepository.getStats()
    return stats
}

export async function putStats(){

}

export async function deleteStats(){

}