/*
    "array with typescript"
    suppose we want array of numbers => number[], (if we want array of only 1 number [number], [number, number] => array of 2 numbers, if want any empty array => [])
*/



// defining the same thing with different syntax that typescript provides
type collectionNumberTy = number[];

interface collectionNumberIn {
    collection: number[]
}

function findMaxTy(arr: collectionNumberTy): number {
    let max = 0;

    arr.forEach((value: number) => {
        max = value > max ? value : max;
    })

    return max;
}

function findMaxIn(arr: collectionNumberIn): number {
    let max = 0;

    const collection = arr["collection"];

    collection.forEach((value: number): void => {
        max = value > max ? value : max;
    })

    return max;
}

type UserTy = {
    firstName: string;
    lastName: string;
    age: number
}

interface UserIn {
    firstName: string;
    lastName: string;
    age: number
}

function filterUseIn(users: UserIn[]): UserIn[] {
   return users.filter(value => value["age"] > 18);
}

function filterUserTy(users: UserTy[]): UserTy[] {
    return users.filter(value => value["age"] > 18)
}