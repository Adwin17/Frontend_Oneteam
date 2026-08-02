/*
let factorial=1
for(let num=1;num<=5;num++){
    factorial=factorial*num
    
}
console.log(factorial)

let first=0
let second=1
console.log(first)
console.log(second)
for (let num=1;num<9;num++){
    let third=(first+second)
    console.log(third)
    first=second
    second=third

}
*/

function primeCheck(){
    let num=prompt("Enter the number")
    is_prime=true
    for(let i=2;i<num;i++){
        if(num%i==0){
            is_prime=false
            alert("Not Prime Number")
            return

        }
    }
    if(is_prime){
        alert("Prime Number")
        return
    }

}