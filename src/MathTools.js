mathTools = function () {}

mathTools.prototype.isFactor = function (num, factor)
{
    return num % factor === 0
}

mathTools.prototype.isEven = function(num)
{
    //return num % 2 === 0
    return this.isFactor(num, 2)
}
