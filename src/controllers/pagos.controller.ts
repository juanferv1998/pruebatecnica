import {Request, Response} from 'express'
import {connect} from '../database'
import {Pago} from '../models/Pago'

export async function getPagos(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const pagos = await conn.query('SELECT * FROM pagos');
    return res.json(pagos[0]);

}

export async function createPago(req: Request, res: Response) {
    
    const newPago: Pago = req.body;
    const conn = await connect();

    //Variables de validacion
    var costo_arriendo = 1000000;
    var valor_restante = 0;
    var formatoDocumento = /^([0-9])*$/;
    var formatoCodigo =/^([a-zA-Z0-9])*$/
    var formatoFecha = /^\d{2,2}\/\d{2,2}\/\d{4,4}$/;
    var fecha = newPago.fechaPago.split("/");
    var dia = fecha[0];
    var mes = fecha[1];
    var year = fecha[2];
    var date = new Date(Number(year),Number(mes),0);
    
    //Logica del negocio
    if ((!newPago.documentoIdentificacionArrendatario.match(formatoDocumento)) && (newPago.documentoIdentificacionArrendatario!= null)) {
        
        res.status(400).send({ respuesta: 'en identificacion solo datos numericos' });
    }
    if ((!newPago.codigoInmueble.match(formatoCodigo)) && (newPago.codigoInmueble!= null)) {
        
        res.status(400).send({ respuesta: 'No se permiten caracteres especiales' });
    }

    if ((!newPago.fechaPago.match(formatoFecha)) && (newPago.fechaPago != null)) {
        
        res.status(400).send({ respuesta: 'Formato de fecha incorrecto' });
    }
    if (Number(dia) > (date.getDate())){
        res.status(400).send({ respuesta: 'fecha de pago no valida o inexistente' });
    }
    if ((newPago.valorPagado > 1000000 || newPago.valorPagado < 1) && (newPago.valorPagado!= null) ){
        res.status(400).send({ respuesta: 'el valor pagado debe estar entre 1 y 1000000 (Un millon)' });
      
    }else    
        if(Number(dia)%2 == 0){
            res.status(400).send({ respuesta: 'lo siento pero no se puede recibir el pago por decreto de administracion' });
        }
        if (newPago.valorPagado == 1000000){
            await conn.query('INSERT INTO pagos SET?',[newPago]);
            res.send({ respuesta: 'gracias por pagar todo tu arriendo '});
        }
    valor_restante = costo_arriendo - newPago.valorPagado
    
    await conn.query('INSERT INTO pagos SET?',[newPago]);
    
    res.send({ respuesta: "gracias por tu abono, sin embargo recuerda que te hace falta pagar ".concat(valor_restante.toString())});
}