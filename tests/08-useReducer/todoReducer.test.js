import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Pruebas en el todoReducer', () => {
    const initialState = [{
        id: 1,
        desc: 'Aprender React',
        done: false
    }];

    test('Debe de retornar el estado por defecto', () => {
        const state = todoReducer(initialState, {});
        expect(state).toBe(initialState);
    });

    test('Debe de agregar un TODO', () => {
        const action = {
            type: 'add',
            payload: {
                id: 2,
                desc: 'Aprender Mongo',
                done: false
            }
        };

        const state = todoReducer(initialState, action);
        expect(state.length).toBe(2);
        expect(state).toContain(action.payload);
    });

    test('Debe de borrar un TODO', () => {
        const action = {
            type: 'delete',
            payload: 1
        };

        const state = todoReducer(initialState, action);
        expect(state.length).toBe(0);
        expect(state).not.toContain(initialState[0]);
    });

    test('Debe de hacer el TOGGLE del TODO', () => {

        const action = {
            type: 'toggle',
            payload: 1
        };

        const state = todoReducer(initialState, action);
        expect(state[0].done).toBe(true);

        const state2 = todoReducer(state, action);
        expect(state2[0].done).toBe(false);
    });
});