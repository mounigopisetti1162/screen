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
    if(data1.currencies.USD)
     {
        console.log(data1.region)
        console.log(data1.currencies)

    // console.log(`Country: ${data1.region}
    // subregion: ${data1.subregion}`)
    }
})
}
}


xhr.send();
