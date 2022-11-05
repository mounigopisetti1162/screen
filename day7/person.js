emp=[{
    id:9,
    name:"mouni"},
    {id:11,
    name:"p ari"},
    {id:10,
    name:"hari"}]
// for(let i=0;i<emp.length;i++)
// {
//     console.log(emp[i].name)
// }
// let empname=emp.map((data)=>
// {
//     return data.name
// })
//console.log(empname)
// let total=emp.reduce((pre,current)=>
// {
//     return 
// },0)
// console.log(total)
let highid=emp.reduce((pre,cur)=>
{
    console.log(pre,cur)
    if(pre.id>cur.id)
    {
        return pre
    }
    else{
        return cur
    }
})
console.log(highid)

let filterdata=emp.filter((data)=>data.id>10)
