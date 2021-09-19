function friendName(name, name2) {
    // console.log('hello ' + name + name2)
}
friendName("karim", "rahim")jhjhjhjhjh

const numbers = [2, 3, 5, 5, 6, 8, 10, 4];

const bigger = numbers.filter(element => element < 5)

const bigger2 = numbers.find(element => element < 5)
// console.log(bigger2)

const students = [
    { id: 12, name: "kader" },
    { id: 22, name: "kuddur" },
    { id: 13, name: "kamal" },
    { id: 14, name: "jamal" },
    { id: 16, name: "abul" },

]

const names = students.map(number => number.name)
console.log(names)
