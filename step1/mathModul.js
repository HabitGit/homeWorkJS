`Функции:
addition - Сложение;
subtraction - Вычитание;
multiplication - Умножение;
division - Деление;
Так же принимают BigInt формат, если значение в nubmer больше 
диапазона точности от -(253-1) до (253-1) то функции конвертируют
в BigInt формат.`


function addition(a, b) {
    let result;
    if (typeof a === 'bigint' || typeof b === 'bigint') {
        result = BigInt(a) + BigInt(b); 
    } else if (a > 9007199254740991 || a < -9007199254740991
             ||b > 9007199254740991 || b < -9007199254740991) {
        result = BigInt(a) + BigInt(b);
    } else result = a + b;
    if (result > 9007199254740991 || result < -9007199254740991) result = BigInt(result);

    return result;
}


function subtraction(a, b) {
    let result;
    if (typeof a === 'bigint' || typeof b === 'bigint') {
        result = BigInt(a) - BigInt(b); 
    } else if (a > 9007199254740991 || a < -9007199254740991
             ||b > 9007199254740991 || b < -9007199254740991) {
        result = BigInt(a) - BigInt(b);
    } else result = a - b;

    if (result > 9007199254740991 || result < -9007199254740991) result = BigInt(result);

    return result;
}


function multiplication(a, b) {
    let result;
    if (typeof a === 'bigint' || typeof b === 'bigint') {
        result = BigInt(a) * BigInt(b); 
    } else if (a > 9007199254740991 || a < -9007199254740991
             ||b > 9007199254740991 || b < -9007199254740991) {
        result = BigInt(a) * BigInt(b);
    } else result = a * b;

    if (result > 9007199254740991 || result < -9007199254740991) result = BigInt(result);

    return result;
}


function division(a, b) {
    let result;
    if (typeof a === 'bigint' || typeof b === 'bigint') {
        result = BigInt(a) / BigInt(b); 
    } else if (a > 9007199254740991 || a < -9007199254740991
             ||b > 9007199254740991 || b < -9007199254740991) {
        result = BigInt(a) / BigInt(b);
    } else result = a / b;

    if (result > 9007199254740991 || result < -9007199254740991) result = BigInt(result);

    return result;
}

