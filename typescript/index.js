function createUser(user) {
    return user;
}
var currentUser = {
    id: 1,
    name: "Ali",
    email: "ali@gmail.com",
    isActive: true
};
createUser(currentUser);
function processInput(val) {
    if (typeof val === "number") {
        return val.toString();
    }
    else {
        return val;
    }
}
