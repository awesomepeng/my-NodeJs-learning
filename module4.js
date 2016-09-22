/**
 * Created by ’≈≈Ù on 2016/9/22.
 */
function Person(name,age){
    this.name=name;
    this.age=age;
    this.sayhello=function(){
        console.log('Hello,'+this.name);
    }
}
//module.exports=Person;
exports.Person = Person;