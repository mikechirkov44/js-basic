/* ***Задача 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, 	
arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного 		
значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и 		
вернуть полученное значение (использовать switch). */

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            return arg1 + arg2;
            break;
        case 'minus':
            return arg1 - arg2;
            break;
        case 'mult':
            return arg1 * arg2;
            break;
        case 'div':
            return arg1 / arg2;
            break;
    }

}

console.log(mathOperation(2, 4, 'minus'))