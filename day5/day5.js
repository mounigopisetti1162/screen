//Anonomus Function
//a)print odd numbers
let oddnum=function(num)
{
    for(var i=1;i<=num;i++)
    {
     if(i%2!==0)
        {
            console.log(i)
        }
    }
}

var odd=oddnum(10)
//console.log(odd)
//c)sum of all numbers in array
let sumnum=function(array)
{
    var sum=+0
    for(var i=0;i<array.length;i++)
    {
     sum+= +(array[i])
     //console.log(array[i])
    }
    return sum
}
let total=sumnum([1,2,34,56,75])
console.log(total)
//d)return all prime numbers inn an array
let primenum=function(array)
{
    for(var i=0;i<array.length;i++)
    {
        let count=+0
    for(var j=2;j<array[i];j++)
    {
        if(array[i]%j==0)
            {
                
            count+=1
            }
    }
    if(count==0)
    {
        console.log(array[i])
    }
    }
}
let prime=primenum([2,3,4,5,6,7,8])
//e) returen all palindroms
let palindrom=function(array)
{
    for(let i=0;i<array.length;i++)
    {
        let val=array[i]
        console.log(array[i])
        var str=val.split("");
        let rev=str.reverse()
        let joinarray=rev.join("")
        if(joinarray==array[i])
            {
                console.log(array[i])
            }
    }
}
let val=palindrom([121])

