import { db } from "@/database/database";
import { AdjustedStats } from "../protocols";

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

export async function putStats({id, player, points, rebounds, assists}:AdjustedStats){
    const updateStat = await db.query<AdjustedStats>(`UPDATE stats 
    SET 
        player = CASE WHEN $1::text IS NULL THEN player ELSE $1::text END, 
        points = CASE WHEN $2::integer IS NULL THEN points ELSE $2::integer END, 
        rebounds = CASE WHEN $3::integer IS NULL THEN rebounds ELSE $3::integer END, 
        assists = CASE WHEN $4::integer IS NULL THEN assists ELSE $4::integer END
    WHERE id = $5;`,[player, points, rebounds, assists, id])
    return updateStat
}

export async function deleteStats(id: number){
    const deleteStat = await db.query<AdjustedStats>(`DELETE FROM stats WHERE id=$1`,[id])
    return deleteStat
}