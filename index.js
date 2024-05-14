const items = [
    { name: 'Bike', price: 100},
    { name: 'TV', price: 200},
    { name: 'Album', price: 10},
    { name: 'Book', price: 5},
    { name: 'Phone', price: 500},
    { name: 'Computer', price: 1000},
    { name: 'Keyboard', price: 25},
]

// Filter method


const filteredItems = items.filter((item)=> {
    return item.price <= 100
})

console.log(filteredItems)

// Map method

const itemsPrice = items.map((item) =>{
    return item.price
})

console.log(itemsPrice)

// Find method

const foundItem = items.find((item) => {
    return item.name === 'Book'
})

console.log(foundItem)


// For each method

items.forEach((item)=>{
    console.log(item.price)
})

const hasInexpensiveItems = items.some((item) => {
    return item.price <= 10000
})

console.log(hasInexpensiveItems)
