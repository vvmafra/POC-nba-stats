import pg from 'pg';

const { Pool } = pg;

const configDataBase: pg.PoolConfig = {
  connectionString: 'postgres://ihctgpti:5POl8CsGgpLSuQWrRx7J2_PPOk-UKg_Y@mahmud.db.elephantsql.com/ihctgpti',
  ssl: process.env.MODE === 'prod' ? true : undefined,
};

console.log('Database running');

export const db = new Pool(configDataBase);
