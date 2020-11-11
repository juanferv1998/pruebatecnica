
import { Pool} from 'mysql2/promise';
const {createPool} = require('mysql2/promise')

export async function connect(): Promise<Pool>{
    const connection = await createPool({
        host: '127.0.0.1',
        port: 3306,
        //host: 'localhost',
        user: 'root',
    
         //password: 'ceiba',
        database: 'pruebaceiba'
     });
     return connection;
}