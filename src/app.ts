import express, {Application, response} from 'express';
import morgan from 'morgan';

//Routes

import PagosRoutes from './routes/pagos.routes'

export class App {
        private app: Application;
        
        constructor(private port?: number | string) {
            this.app = express();
            this.settings();
            this.middlewares();
            this.routes();

        }

        settings (){
            this.app.set('port', this.port || process.env.PORT || 8084);
        }
        middlewares(){
            this.app.use(morgan('dev'));
            this.app.use(express.json());
         
        }

        routes(){
           
            this.app.use('/api/pagos', PagosRoutes);

        }
        async listen() {
            await this.app.listen(this.app.get('port'));
            console.log('Servidor corriendo en puerto', this.app.get('port'));

        }
    
}