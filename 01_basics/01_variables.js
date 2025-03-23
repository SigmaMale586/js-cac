const accountId = 1144553;
let accountEmail = "vaibhav@gmail.com";
var accountPassword = "11111111";
accountCity = "New Delhi";
let accountState;

// Changing the constant accountId
// accountId = 1144559; // Not allowed
// You cannot reassign a constant declared using 'const' keyword

accountEmail = "sigmamale@gmail.com";
accountPassword = "JaiSiyaRam";
accountCity = "Bengaluru";

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);