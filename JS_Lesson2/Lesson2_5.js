/*Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.*/

var a = prompt("Введите первое число: ");
var b = prompt("Введите Второе число: ");

function mathOperation(arg1, arg2, operation)
{
    switch (operation) 
    {
		case "s":
			return arg1+arg2;
		case "m":
			return arg1-arg2;
		case "d":
			return arg1/arg2;
		case "u":
			return arg1*arg2;
            default:
    }
}
 
  
