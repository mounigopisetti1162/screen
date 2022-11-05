class uber
{
    constructor(distance,car)
    {
        this.distance=distance
        this.car=car
    }
    cost(distance)
    {
    if(distance<10)
    {
return distance*12
    }
    else if(distance>10 && distance<30)
    {
        return distance*20
    }
    else{
        return distance*40
    }
}
}
let car1=new uber(20,"inova")
console.log(car1.cost(20))