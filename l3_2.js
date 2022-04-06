// Задание 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

let basket = [
    {
        product: 'яблоки',
        price: 210

    },
    {
        product: 'хлеб',
        price: 30
    },
    {
        product: 'мясо',
        price: 350
    },
    {
        product: 'молоко',
        price: 75
    }
];

let basketTotalAmount = 0;
for (let prod of basket) {
    basketTotalAmount += prod.price;
    console.log("Товар: " + prod.product + " цена: " + prod.price + " руб.");
}

console.log("Итого: " + basketTotalAmount + " руб.")

// Задание 3: Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

function countBasketPrice(basket) {
    let basketPrice = 0;
    for (let prod of basket) {
        basketPrice += prod.price;
    }
    return basketPrice;
}
console.log("Итого: " + countBasketPrice(basket) + " руб.");