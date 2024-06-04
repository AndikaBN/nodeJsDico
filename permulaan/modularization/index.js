const coffee = require("./coffe");
const users = require("./users");

console.log(coffee)

const user = new users.Users();
user.addUser(1, 'Andrew', 'Node Course');
user.addUser(2, 'Jen', 'React Course');
user.addUser(3, 'Mike', 'Node Course');

console.log(user.getUserList('Node Course'));

console.log(user.getAllUsers());