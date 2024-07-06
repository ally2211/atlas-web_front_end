function welcome(firstName, lastName) {
    let fullName = firstName + " " + lastName;
  // helper nested function to use below
  function displayFullName() {
    alert (`Welcome ${fullName}!`)
  }
  welcome();
}