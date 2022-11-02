import { funcionPrueba } from "./Funcion";

describe('testeando mis primeras pruebas', () => {

    test('mi primera prueba', () => {
        let can1 = {
            nombre:'Juan',
            edad:20
        }
        let can2 = {
            nombre:'Juan',
            edad:20
        }
        expect(can1).toEqual(can2);
    });

    test('mi segunda prueba', () => {
        let testFuncion = funcionPrueba(1,2);
        expect(testFuncion).toEqual(3);
    });
})
