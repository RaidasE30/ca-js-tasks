console.group("11. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių");
{
    function isEvenNumberOfLetters(str) {

        return str.length % 2 === 0;
    }

    console.log('---');
    console.log({
        'labas': isEvenNumberOfLetters('labas'),
        'kempės': isEvenNumberOfLetters('kempės'),
        '123123': isEvenNumberOfLetters('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("12. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje");
{
    function getNumberOfVowels(str) {

        return str.match(/[aąeęėiįyouųū]/gi).length;
    }

    console.log('---');
    console.log({
        'aaaaa': getNumberOfVowels('aaaaa'),
        'sasasasa': getNumberOfVowels('sasasasa'),
        'aeyuioąčė': getNumberOfVowels('aeyuioąčė'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("13. Sukurkite funkciją, kuri grąžina priebalsių kiekį žodyje");
{
    function getNumberOfConsonants(str) {
        const result = str.match(/[bcčdfghjklmnprsštvzž]/gi) ?? [];

        return result.length;
    }

    console.log('---');
    console.log({
        'aaaaa': getNumberOfConsonants('aaaaa'),
        'sasasasa': getNumberOfConsonants('sasasasa'),
        'aeyuioąčė': getNumberOfConsonants('aeyuioąčė'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("14. Sukurkite funkciją, kuri grąžina <true>, jeigu NĖRA skaičių");
{
    function isOnlyLetters(str) {
        const result = str.match(/[0123456789]/gi) ?? [];

        return result.length > 0;
    }

    console.log('---');
    console.log({
        'labas': isOnlyLetters('labas'),
        'kempės': isOnlyLetters('kempės'),
        '123123': isOnlyLetters('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("15. Sukurkite funkciją, kuri grąžina 'a' raidžių kiekį žodyje");
{
    function letterACount(str) {
        const result = str.match(/a/gi) ?? [];

        return result.length;
    }

    console.log('---');
    console.log({
        'labas': letterACount('labas'),
        'kempės': letterACount('kempės'),
        '123123': letterACount('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("16. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje");
{
    function letterCount(str, searchLetter) {
        const symbolToFind = new RegExp(searchLetter, 'ig');
        const result = str.match(symbolToFind) ?? [];

        return result.length;
    }

    console.log('---');
    console.log({
        'labas, a': letterCount('labas', 'a'),
        'kempės, k': letterCount('kempės', 'k'),
        '123123, z': letterCount('123123', 'z'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("17. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) 'a' raidės vietą žodyje");
{
    function lastIndexOfLetterA(str) {
        return str.indexOf('a') === -1 ? 'there is no letter "a" in this string' : str.indexOf('a');
    }

    console.log('---');
    console.log({
        'labas': lastIndexOfLetterA('labas'),
        'kempės': lastIndexOfLetterA('kempės'),
        '123123': lastIndexOfLetterA('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("18. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) vartotojo perduotos raidės vietą žodyje");
{
    function lastIndexOfLetter(str, searchLetter) {
        console.log(str.indexOf(searchLetter));
        return str.indexOf(searchLetter) === -1 ? `there is no letter "${searchLetter}" in this string` : str.indexOf(searchLetter);
    }

    console.log('---');
    console.log({
        'labas, a': lastIndexOfLetter('labas', 'a'),
        'kempės, k': lastIndexOfLetter('kempės', 'k'),
        '123123, z': lastIndexOfLetter('123123', 'z'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("19. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais 'a' raidės pasikartojimais žodyje");
{
    function indexesOfLetterA(str) {
        let indexOfA = 0;
        let result = [];

        for (let i = 0; i < str.length; i += 1) {
            indexOfA = str.indexOf('a', indexOfA);
            if (indexOfA < 0) break;
            result.push(indexOfA);
            indexOfA += 1;
        }

        return result;
    }

    console.log('---');
    console.log({
        'labas': indexesOfLetterA('labas'),
        'kempės': indexesOfLetterA('kempės'),
        '123123': indexesOfLetterA('123123'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("20. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais vartotojo įvestos raidės pasikartojimais žodyje");
{
    function indexesOfLetter(str, symbol) {
        let indexOfSymbol = 0;
        let result = [];

        for (let i = 0; i < str.length; i += 1) {
            indexOfSymbol = str.indexOf(symbol, indexOfSymbol);
            if (indexOfSymbol < 0) break;
            result.push(indexOfSymbol);
            indexOfSymbol += 1;
        }

        return result;
    }

    console.log('---');
    console.log({
        'labas, a': indexesOfLetter('labas', 'a'),
        'kempės, m': indexesOfLetter('kempės', 'm'),
        '123123, 2': indexesOfLetter('123123', '2'),
    })
    console.log('---');
}
console.groupEnd();
console.log();