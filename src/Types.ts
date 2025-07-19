// "type" and "interface" are very similar. Both lets the developer to aggregate data. but type cannot be implemented using class. 

// "type" let the developer do the "union" with differen types . use-case suppose the function either accepts string or number => that can be be handle with "type"

// either do this or pull that using types
function greet(id: string | number): void {
    console.log("hello" + id);
}

// UNION (pick up only 1)
type StringNumber = string | number; // defining a type

// intersection with type (sought of combining multiplem interfaces and type together into a single type)

type Employee = {
    name: string;
    startDate: Date
}

interface Manager {
    name: string;
    department: string
}

// doing the intersection & with the type (merging the whole)
type TechLead = Employee & Manager

const t: TechLead = {
    name: "JS",
    startDate: new Date(),
    department: "Web"
}




/*
    Both type and interface are very similar
    
    difference between type and interface
    1. we can implement interface with class, type does not implement
    2. type lets you do union and intersection with interface and type, interface does not

*/