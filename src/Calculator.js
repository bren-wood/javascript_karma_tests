calculator = function() {}

calculator.prototype.add = function(a, b)
{
    return a + b
}

calculator.prototype.subtract = function(a, b)
{
    return a - b
}

calculator.prototype.multiply = function(a, b)
{
    return a * b
}

calculator.prototype.divide = function(a, b)
{
    if (b === 0)
        throw "Cannot divide by 0."

    return a / b
}
