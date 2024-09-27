class product{
    #name;
    #id;
    #rating;
    name;
    constructor(p,q,r,d){
        this.#name=p;
        this.#id=q;
        this.#rating=r;
        this.name=d;
        console.log(this.#name,this.#id,this.#rating);
    }
  display(){
    console.log(this.name);
  }
}
const iphone=new product("Amar",1,23,"Aman");
console.log(iphone);
iphone.display();