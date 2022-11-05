// (function(num){
//     {
//         for(var i=1;i<=num;i++)
//         {
//          if(i%2!==0)
//             {
//                 console.log(i)
//             }
// //         }
// //     }
// // }(10))
// //c)
// (function(array){
//     var sum=+0
//     for(var i=0;i<array.length;i++)
//     {
//      sum+= +(array[i])
//      //console.log(array[i])
//     }
//     console.log(sum)
// }([10,20,30,40]))
//d)
(function(array){
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
}([2,3,45,6,7,8,9]))