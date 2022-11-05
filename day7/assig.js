let xhr= new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all")
xhr.onload=function(){
    let data=JSON.parse(this.response);
//console.log(data)
for(let i=0;i<data.length;i++)
{
    //let user=data[i]
    let country=data.filter((data1)=>
     {
    if(data1.region=="Asia")
     {
    console.log(data1)
    }
})
}
}


xhr.send();
