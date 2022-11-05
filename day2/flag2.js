let xhr= new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all")
xhr.onload=function(){
    let data=JSON.parse(this.response);
//console.log(data)
for(let i=0;i<data.length;i++)
{
    let user=data[i]
    console.log(`"Name:"${user.name.common} 
    "population:"${user.population}
    "region"${user.region}
    "Sub Region:"${user.subregion}`)
   // console.log(user)
    //population
}
}
xhr.send();