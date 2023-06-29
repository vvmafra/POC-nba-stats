export type Stats = {
    id?: number,
    player: string,
    points: number,
    rebounds: number,
    assists: number
}

export type AdjustedStats = {
    id?: number,
    player?: string,
    points?: number,
    rebounds?: number,
    assists?: number
}

export type CreateStat = Omit<Stats, "id">