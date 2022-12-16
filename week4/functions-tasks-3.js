console.group("21. Sukurkite funkciją, kuri ištrintų pirmą surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
    function removeFirstLetterA(str) {
        return str.replace(/a/, '');
    }

    console.log('---');
    console.log({
        'labas': removeFirstLetterA('labas'),
        'kempiniukas': removeFirstLetterA('kempiniukas'),
        '123123': removeFirstLetterA('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("22. Sukurkite funkciją, kuri ištrintų paskutinę surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
    function removeLastLetterA(str) {
        const lastA = str.lastIndexOf('a');

        return str.substring(0, lastA) + str.slice(lastA + 1);
    }

    /*
        Same function can be done with regular expressions method.
        Regex matches 'a' with negative lookahead, if next match found - previous results are discarded.
        */
    // function removeLastLetterA(str) {
    //
    //     return str.replace(/a(?!.*a)/, '');
    // }

    console.log('---');
    console.log({
        'labas': removeLastLetterA('labas'),
        'kempiniukas': removeLastLetterA('kempiniukas'),
        '123123': removeLastLetterA('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("23. Sukurkite funkciją, kuri ištrintų visus 'a' raidės pasikartojimus žodyje");
{
    function removeAllOccurrencesOfLetterA(str) {

        // Regex global flag matches all occurrences (unlike exercise #21 )
        return str.replace(/a/g, '');
    }

    console.log('---');
    console.log({
        'labas': removeAllOccurrencesOfLetterA('labas'),
        'kempiniukas': removeAllOccurrencesOfLetterA('kempiniukas'),
        '123123': removeAllOccurrencesOfLetterA('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("24. Sukurkite funkciją, kuri ištrintų visus, vartotojo įvestos raidės pasikartojimus žodyje");
{
    function removeAllOccurrencesOfLetter(str, letter) {
        const symbol = new RegExp(`${letter}`, 'g');

        return str.replace(symbol, '')
    }

    console.log('---');
    console.log({
        'labas, a': removeAllOccurrencesOfLetter('labas', 'a'),
        'kempiniukas, i': removeAllOccurrencesOfLetter('kempiniukas', 'i'),
        '123123, 3': removeAllOccurrencesOfLetter('123123', '3'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

// 25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.
//  Ši funkcija turi žodyje ištrinti visas raides, kurios perduotos antruoju parametru.
//  Atlikus veiksmus, grąžinti pakeistą žodį
console.group("25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.");
{
    function filterLetters(str, lettersToRemove) {
        const allChars = str.split('');
        const filteredChars = allChars.filter(symbol => !lettersToRemove.includes(symbol));

        return filteredChars.join('');
    }

    /*
    same function can be done with Regex:
    while creating new regular expresion array elements can be joined
    together and wrapped in square brackets that allows to match any letter (that
    is in between square brackets) occurrence in a given string.
     */

    // function filterLetters(str, lettersToRemove) {
    //     const regex = new RegExp(`[${lettersToRemove.join('')}]`, 'g');
    //
    //     return str.replace(regex, '');
    // }

    console.log('---');
    const str = filterLetters('Brangakmienio paveikslas', ['a', 'i']);
    console.log(str);
    console.log('---');
}
console.groupEnd();
console.log();

console.group("26. Sukurkite funkciją, kuri pirmu parametrų priimą sakinį, kiekvieną tarpą pakeičia brūkšneliu ir grąžina pakeistą sakinį");
{
    function replaceSpaceWithDash(str) {
        const allChars = str.split('');
        const filteredChars = [];

        allChars.forEach(char => filteredChars.push(char === ' ' ? '-' : char));

        return filteredChars.join('');
    }

    /*
    This function can be written in shorter and more readable way using regular expressions:
     */

    // function replaceSpaceWithDash(str) {
    //
    //     return str.replace(/\s/g, '-');
    // }

    console.log('---');
    console.log({
        'viens du trys': replaceSpaceWithDash('viens du trys'),
        'as tave myliu': replaceSpaceWithDash('as tave myliu'),
        'Bairis seniuk': replaceSpaceWithDash('Bairis seniuk'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("27. Sukurkite funkciją, kuri pirmu parametru priima sakinį, ir kiekvieno žodžio pirmają raidę padaro didžiąja");
{
    function capitalize(str) {
        let words = str.split(' ');

        for (let i = 0; i < words.length; i += 1) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }

        return words.join(' ');
    }

    console.log('---');
    console.log({
        'viens du trys': capitalize('viens du trys'),
        'as tave myliu': capitalize('as tave myliu'),
        'Bairis seniuk': capitalize('Bairis seniuk'),
    })
    console.log('---');
}
console.groupEnd();
console.log();