/*Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
Обязательно использовать оператор return.*/

function Summa(a, b)
{
    return a + b;
}
sum = Summa(3,7);
alert("Сумма : " + sum);

///////////////////////////////////
function Minus(a, b)
{
    return a - b;
}
min = Minus(3,7);
alert("Вычитание : " + min);

//////////////////////////////
function Division(a, b)
{
    return a / b;
}
dv = Division(3,7);
alert("Деление : " + dv);

///////////////////////////////////
function Multiplication(a, b)
{
    return a * b;
}
mt = Multiplication(3,7);
alert("Умножение : " + mt);