let age = 25
let height = 5.5
let name = "Jinny"
let bools = true

let temp =40
if(temp<10){
    console.log("coools: " + temp)
}

//วนลูปแบบจำกัดรอบ
for (let i=0; i<5; i++) {
    console.log("for: " + i)
}


// วนลูปแบบไม่ทราบรอบ
let count = 0

while (count<10){
    console.log("while: " + count)
    count += 1
}


function login(name,passwords) {
    console.log("login:"+ name+""+passwords)
}
login("minni","แหงก")


function Test(username, passwords){
    console.log("username:"+username+" "+"password:"+passwords)
    if(username=="admin"){
        console.log("adminjinjing")
    }
}

Test("opop","1234")

//array
let colors = ["แดง", "เขียว", "น้ำเงิน"];
console.log(colors[0]); // ผลลัพธ์: แดง
console.log(colors[2]);
console.log(colors[1])

//objects
let person = {
    name:"JIN",
    age:24,
    isStudent:false,
}

console.log(person.name, person.age, person.isStudent);