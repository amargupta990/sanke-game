function fn(a, fn){
    console.log(a)
    fn();
}
fn(2,hello)

function hello(){
    console.log("fello in call")
}