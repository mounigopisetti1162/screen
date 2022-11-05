let xhr= new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all")
xhr.onload=function(){
    let data=JSON.parse(this.response);
//console.log(data)
data.forEach(val => {
    console.log(`Name: ${val.name.common}
    capital: ${val.capital}
    Flag: ${val.flag}`)})
    
    
}

xhr.send();
