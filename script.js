const luke = {
    age: 19,
    rank: "Jedi Apprentice",
    family: {
        surname: "Skywalker",
        sister: "Leia",
        father: "Anakin Skywalker",
        mother: "Padmé Amidala"
    },
    lightsaber: {
        color: "blue",
        originalOwner: "Obi-Wan Kenobi"
    },
    forceSensitivity: 9,
    home: {
        planet: "Tatooine",
        fosterFamily: "Lars",
        occupation: "moisture farmers"
    }
}

//Using destructuring, create and assign a variable to grab each of the following pieces of info:
// 19
// "Jedi Apprentice"
// "Leia"
// "Obi-Wan Kenobi"
// the entire home object

function useName() {
    let name = "Darth Vader"

    function setVader(newName) {
        name = newName;
    }

    return [name, setVader];
}

const [name, setName] = useName();
//What are the data types for the name and setName variables?




//--------Answers--------
const { age } = luke;
const { rank } = luke;
const { family: {sister}} = luke;
const { lightsaber: { originalOwner }} = luke;
const { home } = luke;

console.log(age);
console.log(rank);
console.log(sister);
console.log(originalOwner);
console.log(home);

//name and setName are a string and function respectively