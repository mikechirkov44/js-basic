
// Задание 2. Продолжить работу с интернет-магазином:
// a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// b. Реализуйте такие объекты.
// c. Перенести функционал подсчета корзины на объектно-ориентированную базу.
'use strict'

function itemProduct(name, image, price, quantity, discount = 0) {
    this.name = name;
    this.image = `../img/${image}.png`;
    this.price = price;
    this.quantity = quantity;
    this.discount = discount;
    this.finalPrice = function () {
        if (this.discount != 0) {
            return this.price - this.price * this.discount / 100;
        } else {
            return this.price;
        }
    }
    this.showMyCart = function () {
        return `${this.name} (кол-во: ${this.quantity})`;
    }
}

let shoppingCart = []

shoppingCart.push(
    new itemProduct('product_1', 'product_img_1', 100, 55, 23)
);
shoppingCart.push(
    new itemProduct('product_2', 'product_img_2', 95, 10, 4)
);
shoppingCart.push(
    new itemProduct('product_3', 'product_img_3', 125, 25)
);

function finalChart(shoppingCart) {
    console.log('Ваш заказ: ');
    shoppingCart.forEach(item => {
        console.log(`${item.showMyCart()}.
        Цена с учетом скидки: ${item.finalPrice()}.
        Стоимость товара: ${item.quantity * item.finalPrice()}`);

    });
}

finalChart(shoppingCart);

function finalCost(shoppingCart) {
    return shoppingCart.reduce(function (acc, shoppingCart) {
        return acc + (shoppingCart.finalPrice() * shoppingCart.quantity)
    }, 0)
};
console.log(('Конечная стоимость заказа: ' + finalCost(shoppingCart)).toUpperCase());


// Ваш заказ:
// product_1 (кол-во: 55).
//         Цена с учетом скидки: 77.
//         Стоимость товара: 4235
// product_2 (кол-во: 10).
//         Цена с учетом скидки: 91.2.
//         Стоимость товара: 912
// product_3 (кол-во: 25).
//         Цена с учетом скидки: 125.
//         Стоимость товара: 3125
// КОНЕЧНАЯ СТОИМОСТЬ ЗАКАЗА: 8272