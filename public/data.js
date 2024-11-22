const user =
  {
    birth: "2024-11-22",
    city: "Marseille",
    department: "Human Resources",
    firstName: "John",
    lastName: "Albert",
    startDate: "2024-11-08",
    state: "Alabama",
    street: "zz",
    zipCode: 1
  }

  
  let multiplyUser =  (int, user) => {
    let Users = []
    for (let i = 0; i < int; i++) {
      Users.push(user)
    }
    return Users
  }
  
  const testData = multiplyUser(100, user);


  export default testData;