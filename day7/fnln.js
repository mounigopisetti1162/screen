let student=[
    {fname:"pavan",lname:"sundar"},

    {fname:"swapnil",lname:"selkor"},
    {fname:"venkat",lname:"s."},
    {fname:"john",lname:"p."},
    {fname:"jenny",lname:"r."},
]
let fullname=student.map((stu)=>{
    return `${stu.fname} ${stu.lname}`
})
console.log(fullname)