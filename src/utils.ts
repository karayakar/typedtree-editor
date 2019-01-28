﻿export function isArray(obj: any): boolean {
    // Wrapper to get a 'boolean' typed result.
    return Array.isArray(obj);
}

export function find<T>(array: ReadonlyArray<T>, predicate: (elem: T) => boolean): T | undefined {
    /* Can be used instead of the library Array.find as that doesn't work on ie11 */
    for (let index = 0; index < array.length; index++) {
        if (predicate(array[index]))
            return array[index];
    }
    return undefined;
}

export function sleep(milliseconds: number): Promise<{}> {
    return new Promise((resolve: Function) => setTimeout(resolve, milliseconds));
}

export function formatJson(json: string): string {
    const parsedJson = JSON.parse(json);
    return JSON.stringify(parsedJson, undefined, 2);
}

export function hasDuplicates<T>(input: ReadonlyArray<T>): boolean {
    let hasDuplicates = false;
    input.forEach((value, index) => {
        hasDuplicates = hasDuplicates || input.indexOf(value) != index;
    });
    return hasDuplicates;
}

export function findDuplicates<T>(input: ReadonlyArray<T>): T[] {
    return input.reduce((previousValue, currentValue, currentIndex) => {
        if (input.indexOf(currentValue) != currentIndex && previousValue.indexOf(currentValue) < 0)
            previousValue.push(currentValue);
        return previousValue;
    }, new Array<T>());
}

export function lerp(a: number, b: number, t: number): number {
    return a + (b - a) * t;
}

export function clamp(num: number, min: number, max: number): number {
    return num < min ? min : (num > max ? max : num);
}

export function half(num: number): number {
    return num * .5;
}

export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

export function assertNever(x: never): never {
    throw new Error(`Unexpected object: ${x}`);
}
