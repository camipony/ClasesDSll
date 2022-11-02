import { functionProof } from "./FunctionProof";

describe('1 proof testing', () => {

    test('Prueba si una cadena es pasada en mayusculas', () => {
        let testing = functionProof("Testing");
        expect(testing).toBe("TESTING");
    });
})