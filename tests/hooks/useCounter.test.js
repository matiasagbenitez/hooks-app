import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en el useCounter', () => {
    test('Debe de retornar valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(10);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('Debe de tener el counter en 100', () => {
        const { result } = renderHook(() => useCounter(100));
        expect(result.current.counter).toBe(100);
    });

    test('Debe de incrementar el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { increment } = result.current;
        act(() => {
            increment();
        });
        expect(result.current.counter).toBe(11);
    });

    test('Debe de decrementar el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { decrement } = result.current;
        act(() => {
            decrement();
        });
        expect(result.current.counter).toBe(9);
    });

    test('Debe incrementar y decrementar el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { decrement, increment } = result.current;
        act(() => {
            decrement();
            decrement();
            increment();
        });
        expect(result.current.counter).toBe(9);
    });

    test('Debe de realizar el reset del contador', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement, increment, reset } = result.current;
        act(() => {
            decrement(3);
            decrement(4);
            increment(2);
            reset();
        });
        expect(result.current.counter).toBe(100);
    });
})