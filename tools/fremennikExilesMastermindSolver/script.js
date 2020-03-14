const createSetFunction = () => {
    //create set of the 1296 possible answers
    let possibilities = [];
    for (let index = 1111; index < 6667; index++) {
        indexString = index.toString()
        if (indexString.includes(`0`) || indexString.includes(`7`) || indexString.includes(`8`) || indexString.includes(`9`)) {
            //yeet
        }
        else {
            possibilities.push(indexString)
        }
    }
    return possibilities
}

const initialGuess = 1122

let redTimesSymbolAppeared = 0
let greenCorrectHits = 0



const runes = {
    1: "Air",
    2: "Water",
    3: "Earth",
    4: "Fire",
    5: "Astral",
    6: "Cosmic"
}

