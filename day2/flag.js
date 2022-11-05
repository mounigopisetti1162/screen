let xhr= new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all")
xhr.onload=function(){
    let data=JSON.parse(this.response);
console.log(data)
}
xhr.send();