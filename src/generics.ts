// string[] | number[] -> either the arr should be array of string or array of numbers. Not an array that contains both elements as together. To implement this the type defined would be (string | number)[], now the arr can be numbers, strings, or both

function firstElement(arr: (string[] | number[])): (string | number) {
    return arr[0]
}

firstElement([]);
// firstElement([1, 2, 3, 4]).toLowerCase(); typescript does not able to infer the type => solution is to use Generics

function firstEl(arr: (string | number)[]) {
    return arr[0];
}

// firstEl(["1", "2", "3", "3"]).toLowerCase() Not able to infer the type


function firstElGenerics<T>(value: T[]): T {
    return value[0];
}


const value = firstElGenerics<string>(["dsv", "kjbskegj", "kjbseg"]);
value.toLowerCase();

/*
    Generics makes the code re-usable, type-safe and a single code now be run with different type.

    Using Generics a single component can be worked with many types

    Generics can be used with functions, classes, arrays, interface, type -> Using Generics with these lets you re-use the same logic but with different type

    Generic lets you create single component that works with different types, and when using that "Component" we have to pass the type

*/

// 1. using generic with functions
function getLastElement<T>(arr: T[]): T {
    return arr[arr.length - 1];
}

const value1: string = getLastElement<string>(["1","2"]);
value1.toUpperCase();
const value2: number= getLastElement<number>([1,3,3,4]);

// the same function is used with two types number and string, and using Generics typescript infer the type that the function will return



// 2. using types with interfaces
interface APIResposne<T> {
    data: T;
    msg: string;
    statusCode: number

    // very common we get the response from the backend => we generalize the data that the user will set and same interface will be used for all the API responses
}

const output: APIResposne<{
    firstName: string;
    lastName: string;
    age: number;
}> = {
    data: {
        firstName: "JS",
        lastName: "Developer",
        age: 23
    },
    msg: "OK",
    statusCode: 200
}

// 3. using Generics with class
class Box<T> {
    value: T;

    constructor(value: T) {
        this["value"] = value;
    }

    getValue(): T {
        return this["value"];
    }
}

const numBox: Box<number> = new Box(10);
const strBox: Box<string> = new Box("20");


// 4. "Generics with constraints" (using extends) -> this is used when you have to support the component that has similar methods. 
// T should be only those types that has length property and returns number
function getLength<T extends {length: number}>(value: T): number {
    return value.length;
}


// 5. Default value to Generics
interface APIResult<T = string> {
    data: T
}

// default value
const msg: APIResult = {
    data: "VC"
}

interface Result<T = string> {
    msg: T;
    issues: T[]
}

// nesting generics
const resposne: APIResult<Result<string>> = {
    data: {
        msg: "VC",
        issues: ["1,2"]
    }
}

// arr: [T] -> this defines a generic tuple (array that contains fixed set of element, with fixed order and type ) that only contains 1 element 
function acceptsArrayOfOneEl<T>(arr: [T]): T {
    return arr[0];
}


// Generics with types
type Collection<T> = T[];

const numberCollection: Collection<number> = [1,2,43,45];
const stringCollection: Collection<string> = ["1","2"]

stringCollection[0].toLowerCase();