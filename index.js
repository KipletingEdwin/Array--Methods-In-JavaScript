const items = [
    { name: 'Bike',    price: 100},
    { name: 'TV',    price: 200},
    { name: 'Album',    price: 10},
    { name: 'Book',    price: 5},
    { name: 'Phone',    price: 500},
    { name: 'Computer',    price: 1000},
    { name: 'Keyboard',    price: 25}
]

// Filter Method

const filteredItems = items.filter((item) => {
    return item.price <=100
})
console.log(filteredItems);

// Map Method

const itemNames = items.map((item) => {
    return item.name
})
console.log(itemNames);

//Find Method

const foundItem = items.find((item) => {
    return item.name === 'Computer'
})
console.log(foundItem);

//For Each

items.forEach((item) => {
    console.log(item.price)
})

//Some method

const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
})

console.log(hasInexpensiveItems);

//Every method

const hasCheapItems = items.every((item) => {
    return item.price <= 100
})

console.log(hasCheapItems);

//Reduce method

const total = items.reduce((currentTotal,item) => {
    return item.price + currentTotal
}, 0)

console.log(total);

//Includes

const myArray = [1,2,3,4,5,6,7,8,9,10]

const includesTwo = myArray.includes(2)

console.log(includesTwo);


