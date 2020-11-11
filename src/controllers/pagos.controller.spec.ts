import {getPagos} from './pagos.controller'


xdescribe('GET - Pagos',() => {
    test('probando el metodo GET',() => {
        const expected = 'Hola service';
       // const result = pagos[0].getPagos();

        expect('ho').toStrictEqual(expected);
    })
})
describe('GET - Pagos',() => {
    test('probando el metodo GET'),  () =>{
        return getPagos().then(data => {
            expect(data).toBe('Lista de pagos')
        })
    }
})