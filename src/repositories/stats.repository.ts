import { db } from "@/database/database";

export async function createStat({player, points, rebounds, assists}) {
    
    const newStat = db.query(`INSERT INTO stats 
    ("player", "points", "rebounds", "assists") VALUES 
    ($1, $2, $3, $4)`, [player, points, rebounds, assists])

    return newStat
}

export async function getStats(){
    const getStats = await db.query(`SELECT * FROM stats`)
    return getStats.rows
}

export function putStats(){

}

export function deleteStats(){

}