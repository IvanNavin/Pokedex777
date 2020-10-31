declare const concat: (firstText: string, secondText: string) => string;
declare const arrayWords: Array<string>;
declare const concat2: <T>(array: T[]) => string;
interface taskInterface {
    howIDoIt: string;
    simeArray: [string, string, number];
    withData: [
        {
            howIDoIt: string;
            simeArray: [string, number];
        }
    ];
}
declare const MyHometask: taskInterface;
interface MyArray<T> {
    [n: number]: T;
    reduce<U>(fn: (previousValue: U, currentValue: T, currentIndex?: number, array?: T[]) => U, initialValue?: U): U;
}
declare const TsArray: MyArray<number>;
declare const fn: (previousValue: number, currentValue: number) => number;
