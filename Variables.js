const Account_ID = 123456;
let city = 'Jhargram';
var email = "soham@gmail.com";
name = 'Soham';
let state;

// ID = 123457;   (Id not Changeable.(Const Variable) Error)

// 1st Method to print variables....
console.log(Account_ID);
console.log(email);
console.log(city);
console.log(name);
console.log(state);

// 2nd (Easy) Method to print variables....
console.table([Account_ID,email,city,name,state])

/*  ✅ Note ✅
    Prefer not to use var
    because of issue od block scope and functional Scope
*/

// Emoji Shortcut Key: Win + .