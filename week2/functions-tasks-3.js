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