console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
    const testArray = [1, 2, 3, 4, 5];

    function firstElementOfArray(array) {

        return array[0];
    }

    console.log(`first element of array [${testArray}] :`, firstElementOfArray(testArray));
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
    const testArray = [5, 4, 3, 2, 1];

    function removeFirstElementOfArray(array) {
        delete array[0];

        return array;
    }

    console.log(`removed first element from array [${testArray}] :`, removeFirstElementOfArray(testArray));
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
    const testArray = [5, 4, 3, 2, 1];

    function lastElementOfArray(array) {

        return array[array.length - 1];
    }

    console.log(`last element of array [${testArray}] :`, lastElementOfArray(testArray));
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
    const testArray = [5, 4, 3, 2, 1, 0];

    function removeLastElementOfArray(array) {
        array.length -= 1;

        return array;
    }

    console.log(`removed first element from array [${testArray}] :`, removeLastElementOfArray(testArray));
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
    const testArray = ['a', 'b', 'c', 'd', 'e', 'f'];

    function arrayLength(array) {

        return array.length;
    }

    console.log(`length of array [${testArray}] is:`, arrayLength(testArray));
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
    const testArray = ['a', 'b', 'c', 'd', 'e', 'f'];

    function printIndexOfLastElement(array) {

        console.log(`index of last element in array [${testArray}] is:`, array.length - 1);
    }

    printIndexOfLastElement(testArray);
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
    const testArray = [5, 4, 3, 2, 1, 0];

    function printArrayIndexInColumn(array) {
        console.log(`index numbers of array [${testArray}] in column`)
        for (i=0; i<array.length; i++) {
            console.log(i);
        }
    }

    printArrayIndexInColumn(testArray);
}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
    const testArray = [5, 4, 3, 2, 1, 0];

    function printArrayElementsInColumn(array) {
        console.log(`elements of array [${testArray}] in column`)
        for (i=0; i<array.length; i++) {
            console.log(testArray[i]);
        }
    }

    printArrayElementsInColumn(testArray);
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
    const testArray = ['a', 'b', 'c', 'd', 'e', 'f'];

    function printArrayIndexAndElementsPairs(array) {
        console.log(`index number and element of array ${testArray} in php var_dump style:`)

        for (i=0; i<array.length; i++) {
            console.log(`[${i}] =>`, array[i])
        }
    }

    printArrayIndexAndElementsPairs(testArray);
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
    const testArray = ['a', 'b', 'c', 'd', 'e', 'f'];

    function printArrayBackwards(array) {
        console.log(`array [${testArray}] printed backwards:`);

        for (i=array.length -1; i>=0; i--) {
            console.log(array[i]);
        }
    }

    printArrayBackwards(testArray);
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
    const testArray = ['a', 'b', 'c', 'd', 'e', 'f'];

    function printArrayIndexInOneLine(array) {
        let index = '';
        const lastElement = array.length - 1;

        for (i=0; i<array.length; i++) {
            index += i;
            i !== lastElement ? index += ' ' : '';
        }

        console.log(`indexes of array [${testArray}] in one line:`);
        console.log(index);
    }

    printArrayIndexInOneLine(testArray);
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
    const testArray = ['a', 'b', 'c', 'd', 'e', 'f'];

    function printArrayValuesInLine(array) {
        const lastElement = array.length - 1;
        let values = '';

        for (i=0; i<array.length; i++) {
            values += array[i];
            i !== lastElement ? values += ' ' : '';
        }

        console.log(`values of array [${testArray}] in one line:`);
        console.log(values);
    }

    printArrayValuesInLine(testArray);
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
    const testArray = ['a', 'b', 'c', 'd', 'e', 'f'];

    function printKeyValuePairs(array) {
        let result = '';
        const lastElement = array.length - 1;

        for (i=0; i<array.length; i++) {
            // console.log(`[${i}] =>`, array[i])
            result += `[${i}]=>`;
            result += array[i]
            i !== lastElement ? result += ' ' : '';
        }

        console.log(`array [${testArray}] printed in line php var_dump style:`)
        console.log(result);
    }

    printKeyValuePairs(testArray);
}
console.groupEnd();