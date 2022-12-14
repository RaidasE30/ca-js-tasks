console.group("1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis");
{
    // Funkcijos deklaravimas
    function printCapital(str) {
        console.log(str.toUpperCase());
    }

    console.log('---');
    console.log("abcd");
    printCapital("abcd");
    console.log("AAAA");
    printCapital("AAAA");
    console.log("aBcD");
    printCapital("aBcD");
    console.log('---');
}
console.groupEnd();
console.log();

console.group("2. Sukurkite funkciją, kuri atspausdina tekstą mažosiomis raidėmis");
{
    // Funkcijos deklaravimas
    function printLower(str) {
        console.log(str.toLowerCase());
    }

    console.log('---');
    console.log("ABCD");
    printLower("abcd");
    console.log("AAAA");
    printLower("AAAA");
    console.log("aBcD");
    printLower("aBcD");
    console.log('---');
}
console.groupEnd();
console.log();

console.group("3. Sukurkite funkciją, kuri atspausdina pirmojo parametro pirmają raidę");
{
    // Funkcijos deklaravimas
    function printFirstLetter(str) {
        console.log(str.substr(0, 1));
    }

    console.log('---');
    console.log("ABCD");
    printFirstLetter("abcd");
    console.log("AAAA");
    printFirstLetter("AAAA");
    console.log("aBcD");
    printFirstLetter("aBcD");
    console.log('---');
}
console.groupEnd();
console.log();

console.group("4. Sukurkite funkciją, kuri atspausdina pirmojo parametro paskutinę raidę");
{
    // Funkcijos deklaravimas
    function printLastLetter(str) {
        console.log(str.substr(-1, 1));
    }

    console.log('---');
    printLastLetter('Labas');
    printLastLetter('Ate');
    printLastLetter('Brieda');
    console.log('---');
}
console.groupEnd();
console.log();

console.group("5. Sukurkite funkciją, kuri atspausdina pirmojo parametro viduriniają raidę");
{
    function printMiddleLetter(str) {
        const remainder = str.length % 2;
        const middle = (str.length - 1) / 2;
        console.log(remainder === 0 ? str.charAt(middle + remainder) : str.charAt(middle));
    }

    console.log('---');
    printMiddleLetter('Labas');
    printMiddleLetter('Ate');
    printMiddleLetter('Brieda');
    console.log('---');
}
console.groupEnd();
console.log();

console.group("6. Sukurkite funkciją, kuri grąžina simbolių darinio raidžių skaičių");
{
    function getLetterCount(str) {

        return str.length;
    }

    console.log('---');
    console.log({
        'labas': getLetterCount('labas'),
        'kranas': getLetterCount('kranas'),
        'kebabas': getLetterCount('kebabas'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("7. Sukurkite funkciją, kuri grąžina simbolių darinio raidžių skaičių padaugintą iš dviejų");
{
    function getDoubleLetterCount(str) {

        return str.length * 2;
    }

    console.log('---');
    console.log({
        'labas': getDoubleLetterCount('labas'),
        'kranas': getDoubleLetterCount('kranas'),
        'kebabas': getDoubleLetterCount('kebabas'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("8. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių");
{
    function getArgsLetterSum(a, b) {

        return a.length + b.length;
    }

    console.log('---');
    console.log({
        'labas, abc': getArgsLetterSum('labas', 'abc'),
        'kranas, jonas': getArgsLetterSum('kranas', 'jonas'),
        'kebabas, kefyras': getArgsLetterSum('kebabas', 'kefyras'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("9. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 'a' raidė, priešingu atveju <false>");
{
    function containsLetterA(str) {

        return str.includes('a');
    }

    console.log('---');
    console.log({
        'labas': containsLetterA('labas'),
        'kempė': containsLetterA('kempė'),
        'Finakolė': containsLetterA('Finakolė'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

console.group("10. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false");
{
    function containsLetter(str, letter) {

        return str.includes(letter);
    }

    console.log('---');
    console.log({
        'labas, a': containsLetter('labas', 'a'),
        'kempė, a': containsLetter('kempė', 'a'),
        'Finakolė, u': containsLetter('Finakolė', 'u'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

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

console.group("28. Sukurkite funkciją, kuri atspausdina žodį atvirkščiai 'abc' -> 'cba'");
{
    function strReverse(str) {
        // code ...
    }

    // console.log('---');
    // strReverse('viens du trys');
    // strReverse('as tave myliu');
    // strReverse('Bairis seniuk');
    // console.log('---');
}
console.groupEnd();
console.log();


// 29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)
//  mama -> false
//  mamam -> true
//  123321 -> true
//  123456 -> false
console.group("29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)");
{
    // Example below was provided by Žilvinas


    // function isPalindrome(str) {
    //     let i = 0;
    //     let k = str.length - 1;
    //     while (i < k) {
    //         if (str[i] !== str[k]) return false;
    //         i++;
    //         k--;
    //     }
    //     return true;
    // }

    // my solution:
    function isPalindrome(str) {
        str = str.toLowerCase();

        return str === str.split('').reverse().join('');
    }

    console.log('---');
    console.log({
      'mama': isPalindrome('mama'),
      'mamam': isPalindrome('mamam'),
      '123321': isPalindrome('123321'),
      '123456': isPalindrome('123456'),
        'TacoCat': isPalindrome('TacoCat'),
        'RaceCar': isPalindrome('RaceCar'),
    })
    console.log('---');
}
console.groupEnd();
console.log();

// 30. Sukurkite funkciją, kuri taiso pastraipos klaidas:
//  Pirma sakinio raidė didžioji
//  Po skiriamojo ženklo tarpas, o prieš skiriamajį ženklą nėra tarpo (skiriamieji ženklai: .,!?)
//  Bet kokį kiekį tapų pakeičia vienu tarpu
//    mėgstu pieną , bet medų nelabai.labanakt. -> Mėgstu pieną, bet medų nelabai. Labanakt.
console.group("30. Sukurkite funkciją, kuri taiso pastraipos klaidas");
{

    function capitalizeFirstLetter(str) {
        // code ...
    }

    function splitIntoSentences(paragraph) {
        /*
          2.1 Atskirti pagal sakinio baigimo ženklus ir juos įsiminti
          2.2 Pašalinti tuščius tarpus iš kairės ir dešinės
          2.3 grąžinti objektą su dviem masyvais:
          {
            sentences: [sentence1, sentence2, ... , sentenceN],
            separator: [ '.', '?', ... , '!'],
          }
        */
    }

    function reduceEmptySpaces(str) {
        // Jūsų sugalvota logika, kaip šalinti tarpus prieš kablelį ir kelis tarpus iš eilės
    }

    // 1.
    function fixParagraph(paragraph) {
        /*
          2. Pirmiausiai suskirstome į sakinius, naudojant splitIntoSentences:
                string  ->  {
                              sentences: [sentence1, sentence2, ... , sentenceN],
                              separator: [ '.', '?', ... , '!'],
                            }
          3. Redaguoti kiekvieną sakinį, naudojant funkciją reduceEmptySpaces
          4. Redaguoti kiekvieną sakinį, naudojant funkciją capitalizeFirstLetter
          5. Sujungti sakinius su atitinkamais sakinių skiriamaisiais/baigiamaisiais ženklais
          6. Grąžinti rezultatą.
        */

        // remove spaces before and after paragraph and split paragraph in to sentences
        paragraph = paragraph.trim().split(/([.?!])/g)

        // filter for empty strings and capitalize first letter of every sentence
        paragraph = paragraph.filter((sentence) => sentence !== '')
            .map((string) => string[0].toUpperCase() + string.slice(1));

        // join sentences to paragraph
        paragraph = paragraph.join('');

        // remove multiple spaces
        paragraph = paragraph.replace(/\s+/g, ' ');

        // look for space followed by separator and remove space before it
        paragraph = paragraph.replace(/\s([,.?!])/g, '$1');

        // change name jonas to Jonas
        paragraph = paragraph.replace(/jonas/g, 'Jonas');

        return paragraph;

        // alternate "one liner" ,but barely readable:

        // return paragraph
        //     .trim()
        //     .split(/([.?!])/g)
        //     .filter((sentence) => sentence !== '')
        //     .map((string) => string[0].toUpperCase() + string.slice(1)).join('')
        //     .replace(/\s+/g, ' ')
        //     .replace(/\s([,.?!])/g, '$1')
        //     .replace(/jonas/g, 'Jonas')

    }

    const paragraph = '    labas , as jonas . Tave      vadina Kęstu? Taip ir žinojau  !    ';
    const fixedParagraph = fixParagraph(paragraph);
    console.log(paragraph);
    console.log(fixedParagraph);
    console.log('---');
}
console.groupEnd();
console.log();

// 31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą:
//  labas, aš esu grybas -> ['labas', 'aš', 'esu', 'grybas']
console.group("31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą");
{
    function splitSentence(sentence) {
        return sentence.split(' ');
    }

    console.log('---');
    console.log({
      'Labas aš Jonas': splitSentence('Labas aš Jonas'),
      'Kėgliai yra gerai': splitSentence('Kėgliai yra gerai'),
    })
    console.log('---');
}
console.groupEnd();
console.log();


// 32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį
//  Ši funkcija turi grąžinti masyvą sudarytą iš atskirtų dalių:
//  explode('Man patinka sniegas', ' ');  -> ['man', 'patinka', 'sniegas'];
//  explode('home/about/13', '/');        -> ['home', 'about', '13'];
console.group("32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį");
{
    function explode(str, separator) {
        return str.split(separator)
    }

    console.log('---');
    console.log({
      "'Man patinka sniegas', ' '": explode('Man patinka sniegas', ' '),
      "'home/about/13', '/'": explode('home/about/13', '/'),
    })
    console.log('---');
}
console.groupEnd();
console.log();