class movie
{
    constructor(name,studio,rating="PG")
    {
        this.name=name;
        this.studio=studio
        this.rating=rating
        name="not known"
        
    }
    getpg()
    {
        let array=[]
        if(this.rating=="PG")
        {
            array+=array+this.name
        }
        else{
            console.log(this.name)
        }
         return array;
    }
   
}

let movie1=new movie("Casiou Royals","Eon Preduction","PG")
console.log(movie1.getpg())