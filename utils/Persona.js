var Persona = require("persona-generator");




var persona = new Persona({
    firstnamelist: "./lists/firstname_american.txt",
    lastnamelist: "./lists/lastname_american.txt",
    emailDomain: "easybiscuitrecipe.com",
    randomBirthday: true,
    startDate: "1985, 1, 1",
    endDate: "2004, 1, 1",
    randomNum: true,
    digits: 3,
    save: true,
})



var persona = new Persona()
console.log(persona.generate())
