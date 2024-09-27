let obj={
    name:"Amar",
    id:12,
    add:"Delhi"
}
//obj.class="four"
//console.log(obj)
function emp(i,n,c){
    this.id=i;
    this.name=n;
    this.class=c;
}
const e=new emp(2,"amar","four")
console.log(e)
console.log(e.class)
console.log(e.name)