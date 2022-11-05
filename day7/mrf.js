let places=[{
    country:"india",
    city:"delhi"
},
{country:"usa",city:"new york"},{country:"india",city:"benguluru"}]
let india_country=places.filter((data)=>
{
if(data.country=="india")
{
    return data.city
}
}).map((x)=>{
    return x.city
})
console.log(india_country)