// Enums are used to define set of named-constants-values and assigning that set / collection with a human-readable name.


// one sought of mimic the enum is using type with union
type DirectionTy = "up" | "down" | "left" | "right"

function doAction(input: DirectionTy): void {
    if (input === "down"){

    }
}

/*
    defining an enum with a set of name-constant values and assigning the set with name (Direction)
    By-default the name-constants in enum are associated with a number value (0,1,2, ..) or we can provide them value string

    whenever printing the enum-named-constants we always get final values either 0,1,2 3... or string values ( this we have to defined for each named-constant )

    values present inside the enum always have the value either 0, 1, 2, 3 ... or string value, the comparision is done on the basis of that

    think of enum as it provides you an "object" that contains the key as named-constants + their values either 0,1 2, or custom value that set

    now the user have to pass only the particular key that is present inside the enum

*/

enum Direction {
    "Up" = "up",
    "Down" = "down",
    "Left" = "left",
    "Right" = "right"
}

function game(keyInput: Direction) {
    if(keyInput === Direction.Down) {
        console.log(keyInput);
    }
}


game(Direction.Up);

const up: Direction = Direction.Up;


enum Payment {
    "Cash" = "cash",
    "Net-Banking" = "net-banking",
    "UPI" = "upi",
    "Card" = "card"
}

enum Categories {
    "Food",
    "Entertainment",
    "Travel"
}

console.log(Categories);
function setCategory(category: Categories): void {
    console.log(category) // 0, 1, 2
}

function selectCategory(category: Categories) {
    setCategory(category);
}

selectCategory(Categories.Travel);

function setPayment(payment: Payment) {
    console.log(payment);
}

function selectPayment(value: Payment) {
    setPayment(value); // value => "card", "upi", "cash", "net-banking"
}

selectPayment(Payment.Card);


function text (value: Payment): void {
    switch(value) {
        case Payment.Card:
            console.log(value)
        break;
        case Payment.Cash: 
            console.log(Payment.Cash)
        break;
        case Payment.UPI:
            console.log("upi");
        break;
        case Payment["Net-Banking"]:
            console.log(Payment["Net-Banking"]);
        break;
    }
}

text(Payment["Card"]);