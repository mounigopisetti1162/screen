class person{
    constructor(name,age,id,working)
    {
        this.name=name;
        this.age=age;
        this.id=id;
        this.working=working
    }
    data=[`name: ${this.name}
    age: ${this.age}
    id: ${this.id}
    working: ${ this.working}`]

    }
    let data1=new person("mounika",22,23456,"paniki")
console.log(data1)