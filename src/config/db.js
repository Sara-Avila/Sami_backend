import pg from 'pg';
import { config } from './environment.js';

const { Pool } = pg;

// Singleton pg.Pool (PostgreSQL)
export const pool = new Pool(config.postgres);

pool.on('connect', () => {
    if (config.nodeEnv === 'development') {
    console.log('🐘 [PostgreSQL] Conectado exitosamente');
    }
});

pool.on('error', (err) => {
    console.error('❌ [PostgreSQL Error en Cliente Ocioso]:', err.message);
});


// Live coding 2C

export async function connectDatabases() {
    console.log('🔌 [ FLOURFINDER DB] Inicializando conexiones...');

  // Verificación PostgreSQL
    try {
    const res = await pool.query('SELECT NOW() AS t, current_database() AS db');
    console.log(`✅ [PostgreSQL Conectado] Base: "${res.rows[0].db}"`);
    } catch (err) {
    console.error(`❌ [PostgreSQL Falló Conexión]: ${err.message}`);
    }
}

// Cerrando PostgreSQL
export async function disconnectDatabases() {
    await pool.end();
    console.log('🔒 La base de datos fue cerrada correctamente');
}