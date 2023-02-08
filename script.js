const characterRange = document.getElementById("characterRange")
const characterNumber = document.getElementById("characterNumber")
const includeUpper = document.getElementById("includeUppercase")
const includeNumber = document.getElementById("includeNumbers");
const includeSymbol = document.getElementById("includeSymbols")
const form = document.getElementById("passwordGeneratorForm")
const passwordDisplay = document.getElementById("passwordDisplay")

//Arrays
const LOWERCASE_CHAR_CODE = arrayFromLowToHigh(97, 122)
const UPPERCASE_CHAR_CODE = arrayFromLowToHigh(65, 90)
const NUMBER_CHAR_CODE = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODE = arrayFromLowToHigh(33, 47).concat(58, 64).concat(91, 126)

characterRange.addEventListener('input', syncCharacters)
characterNumber.addEventListener('input', syncCharacters)

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterNum = characterNumber.value
    const includeUp = includeUpper.checked
    const includeNum = includeNumber.checked
    const includeSym = includeSymbol.checked
    const password = generatePassword(characterNum, includeUp, includeNum, includeSym)
    passwordDisplay.innerText = password
})

function generatePassword(characterNum, includeUp, includeNum, includeSym) {
    let charCodes = LOWERCASE_CHAR_CODE
    if (includeUp) {
        charCodes = charCodes.concat(UPPERCASE_CHAR_CODE)
    }
    if (includeNum) {
        charCodes = charCodes.concat(NUMBER_CHAR_CODE)
    }
    if (includeSym) {
        charCodes = charCodes.concat(SYMBOL_CHAR_CODE)
    }

    const passwordCharacters = []
    for (let i = 0; i < characterNum; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join(''); //returns array as string
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

function syncCharacters (e) {
    const value = e.target.value
    characterRange.value = value;
    characterNumber.value = value;
}

