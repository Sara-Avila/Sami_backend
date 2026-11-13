import pg from 'pg';
import { config } from './environment.js';

const { Pool } = pg;

// 1. Singleton pg.Pool (PostgreSQL)
export const pool = new Pool(config.postgres);

pool.on('connect', () => {
  if (config.nodeEnv === 'development') {
    console.log('🐘 [PostgreSQL] Nuevo cliente físico asignado en el Pool');
  }
});

pool.on('error', (err) => {
  console.error('❌ [PostgreSQL Error en Cliente Ocioso]:', err.message);
});
