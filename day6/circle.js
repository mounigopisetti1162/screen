class circle
{
    constructor(radious,colour)
    {
        this.radious=radious
        this.colour=colour
    }
    setrad(radious)
    {
        this.radious=radious;
    }
    getrad()
    {
        console.log(`Radious ${this.radious}`)
    }
    setcolour(colour)
    {
        this.colour=colour;
    }
    getcolour()
    {
        console.log(`Colour ${this.colour}`)
    }
    getarea(radious)
    {
        let area=Math.PI*radious*radious
        console.log("the area of the circile is ",area.toFixed(2))
    }
    getcir(rad)
    {
        let circumference=2*Math.PI*rad
        console.log("the circumference of the circle is ",circumference.toFixed(2))
    }
}
let val=new circle(10,"green")
val.setcolour("white")
val.setrad(12)
val.getrad()
val.getcolour()
val.getarea(45)
val.getcir(7)