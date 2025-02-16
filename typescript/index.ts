// 1
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }
  
  function createUser(user: User): User {
    return user;
  }
  
  const currentUser: User = {
    id: 1,
    name: "Ali",
    email: "ali@gmail.com",
    isActive: true
  };

createUser(currentUser);

// 2

type Input = number | string;

function processInput(val: Input): string {
  if (typeof val === "number") {
    return val.toString();
  } else {
    return val;
  }
}



  

  