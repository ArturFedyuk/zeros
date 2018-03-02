module.exports = function getZerosCount(number) {
  zero = 0; 
  num= 5;
    while(number > num)
    {
        zero += Math.floor(number / num);
        num *= 5;
    }
return zero;
}
