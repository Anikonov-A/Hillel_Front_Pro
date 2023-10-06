function Person(name,lastName,age,eyeColor){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor= eyeColor;
    this.showData =()=>{
        document.write(this.name,this.lastName,this.age,this.eyeColor)
    }
}