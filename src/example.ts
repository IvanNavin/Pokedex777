/*
* Работа с простыми типами
* Напиши тип функции, конкатенирующей две строки
*/

/* 1й вариант */
const concat = (firstText: string, secondText: string): string => {
    return `${firstText} + ${secondText}`;
}
concat('Hello ', 'World');

/* 2й вариант с женериками */
const arrayWords: Array<string> = ['Hello ', 'World'];
const concat2 = <T>(array: T[]): string => {
	return array.join()
}

console.log(concat('Hello ', 'World')); // "Hello World"
console.log(concat2(arrayWords)); // "Hello World"

//==================================================================

/*
* Работа с интерфейсами
* Напиши интерфейс для описания следующих данных
* */

interface taskInterface {
	howIDoIt: string
	simeArray: [string, string, number]
	withData: [{
		howIDoIt: string
		simeArray: [string, number]
	}]
}

const MyHometask: taskInterface = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

console.log(MyHometask);

//============================================================

/*
* В уроке про Generics мы написали интерфейс массива MyArray...
* Добавь типизацию для метода reduce
* */

interface MyArray<T> {
	[n: number]: T;

	reduce<U>(
		fn: (previousValue: U,
			 currentValue: T,
			 currentIndex?: number,
			 array?: T[]) => U,
		initialValue?: U): U;
}

const TsArray: MyArray<number> = [1, 2, 3, 4];
const fn: (previousValue: number, currentValue: number) => number = (a, b) => a + b;

console.log(TsArray.reduce(fn)); // 10