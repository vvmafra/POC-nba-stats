import { CreateStat, Stats } from "@/protocols";

const stats: Stats[] = [

]

export function createStat(stat: Stats) {
    return stats.push(stat)

}

export function getStats(){
    return stats
}

export function putStats(){

}

export function deleteStats(){

}