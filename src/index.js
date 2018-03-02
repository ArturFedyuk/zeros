module.exports = function getZerosCount(number) {
  num = 0; 
  exp= 5;
    while(num > exp)
    {
        num += Math.floor(num / exp);
        exp *= 5;
    }
return num;
}
