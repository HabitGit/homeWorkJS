'use strict';

`Класс Product с полями: name, price, qantity, description.

В классе присутствует метод search, который на вход получает строку с фильтром и массив в котором
нужно произвести поиск по данному фильтру. Для поиска Product.search(filter, array)

Я написал 4 отдельные функции:
1. Разбивает по 1 фильтру, разделяет фильтры для поиска по строковым полям и числовым. 
2. Ищет совпадения в строковых полях
3. Ищет совпадения в числовых полях
4. Если в фильтре был указан поиск и по строковым типам и по числовым, эта функция объеденяет
результат и выводит его, или же выводит результаты только по заданному типу.`
class Product {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }


    static filterReader(str) {
        let cutFilters = str.split('&')
           ,stringFilters = []
           ,numberFilters = []
           ,filtres;
    
        for (let filter of cutFilters) {
            let [filterKey
                ,filterType
               ,filterValue] = filter.split('-');
    
            if (filterValue === undefined) {
            numberFilters.push(filterKey + ' ' + filterType);
    
            } else {
            stringFilters.push(filterKey + ' ' + filterType + ' ' + filterValue);
            }
        }
    
        return filtres = [stringFilters, numberFilters];
    }


    static numberSearch(str, array) {
        let filters = this.filterReader(str)
           ,countFilters = ['<', '=', '>', '<=', '>=']
           ,arrayAfterCountFilter = []
           ,result = new Set();
    
        for (let filter of filters[1]) {
            let [filterKey
                ,filterType] = filter.split(' ');
    
            for (let arrayValue of array) {
    
                if (filterType.slice(0, 2) == countFilters[3] 
                && arrayValue[filterKey] <= filterType.slice(2)) {
                    arrayAfterCountFilter.push(arrayValue);
    
                } else if (filterType.slice(0, 2) == countFilters[4]
                && arrayValue[filterKey] >= filterType.slice(2)) {
                    arrayAfterCountFilter.push(arrayValue);
    
                } else if (filterType.slice(0, 1) == countFilters[0]
                && arrayValue[filterKey] < filterType.slice(1)) {
                    arrayAfterCountFilter.push(arrayValue);
    
                } else if (filterType.slice(0, 1) == countFilters[1]
                && arrayValue[filterKey] == filterType.slice(1)) {
                    arrayAfterCountFilter.push(arrayValue);
    
                } else if (filterType.slice(0, 1) == countFilters[2]
                && arrayValue[filterKey] > filterType.slice(1)) {
                    arrayAfterCountFilter.push(arrayValue);
                }
            }
        }
    
        if (filters[1] == ' undefined' || filters[1] == 0) return result = null;
        if (filters[1].length > 1) { 
    
            for (let i = 0; i < arrayAfterCountFilter.length; i++) {
                let index = 0;
    
                for (let j of arrayAfterCountFilter) {
    
                    if (j == arrayAfterCountFilter[i]) {
                        index++
                        if (index > 1) result.add(arrayAfterCountFilter[i]);
                    }
                }
            }
    
        } else {
            for (let j of arrayAfterCountFilter) {
                result.add(j); 
            }
        }
        return result;
    }


    static stringSearch(str, array) {
        let filters = this.filterReader(str)
        ,stringFilters = ['contains', 'starts', 'ends']
        ,arrayAfterStringFilter = []
        ,result = new Set();
        
        for (let filter of filters[0]) {
            let [filterKey
                ,filterType
                ,filterValue] = filter.split(' ');
    
            for (let arrayValue of array) {
    
                if (filterType == stringFilters[0]
                    && arrayValue[filterKey].toLowerCase().includes(filterValue.toLowerCase())) {
                    arrayAfterStringFilter.push(arrayValue);
    
                } else if (filterType == stringFilters[1]
                    && arrayValue[filterKey].toLowerCase().startsWith(filterValue.toLowerCase())) {
                    arrayAfterStringFilter.push(arrayValue); 
                    
                } else if (filterType == stringFilters[2]
                    && arrayValue[filterKey].toLowerCase().endsWith(filterValue.toLowerCase())) {
                    arrayAfterStringFilter.push(arrayValue);
                
                }
            }
        }
    
        if (filters[0].length == 0) return result = null;
        if (filters[0].length > 1) { 
    
            for (let i = 0; i < arrayAfterStringFilter.length; i++) {
                let index = 0;
    
                for (let j of arrayAfterStringFilter) {
    
                    if (j == arrayAfterStringFilter[i]) {
                        index++
                        if (index > 1) result.add(arrayAfterStringFilter[i]);
                    }
                }
            }
        } else {
            for (let j of arrayAfterStringFilter) {
                result.add(j); 
            }
        }
        return result;
    }


    static search(str, array) {
        let stringSearchVar = this.stringSearch(str, array)
           ,numberSearchVar = this.numberSearch(str, array)
           ,repeating = new Set()
           ,result = new Array();
    
        if (stringSearchVar === null) result = Array.from(numberSearchVar);
        else if (numberSearchVar === null) result = Array.from(stringSearchVar);
        else {
            for (let i of numberSearchVar) {
    
                for (let j of stringSearchVar) {
    
                    if (i == j) repeating.add(i);
                }
            }
            result = Array.from(repeating);
        }
        return result;
    }
}


let products = [
    new Product('Potato', 25, 1000, 'This- is potato')
   ,new Product('Milk', 150, 14, 'This is milk')
   ,new Product('Bread', 15, 58, 'This is bread')
   ,new Product('onion', 10, 1000, 'This- is onion')
   ,new Product('Butter', 250, 10, 'This-is butter')
   ,new Product('Tea', 80, 150, 'This- is tea')
   ,new Product('Coffe', 235, 100, 'This is coffe')
   ,new Product('Eag', 32, 100, 'This is eag')
];


let message = 'name-contains-po&price->2&quantity->5&description-ends-to';
let message2 = 'name-contains-ea';
let message3 = 'name-contains-ea&quantity-<=100';
let message4 = 'name-contains-ea&quantity-<=100&price->20';
let message5 = 'quantity->=14&price-<80';


console.log(Product.search(message, products));  //результат будет: potato
console.log(Product.search(message2, products)); // результат будет: Eag, Tea, Bread
console.log(Product.search(message3, products)); // результат: Eag, Bread
console.log(Product.search(message4, products)); // результат: Eag
console.log(Product.search(message5, products)); // результат: Eag, onion, bread, potato