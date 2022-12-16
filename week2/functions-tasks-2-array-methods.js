// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{
    function mulArrBy2(numbers) {
        function multiplyBy2(number) {
            return number * 2;
        }

        return numbers.map(multiplyBy2);
    }

    console.log({
        numbers,
        result: mulArrBy2(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
console.log('---');
{
    function powerArrBy2(numbers) {
        function empowerBy2(number) {
            return number ** 2;
        }

        return numbers.map(empowerBy2);
    }

    console.log({
        numbers,
        result: powerArrBy2(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve) ir išsaugoti naujame masyve');
console.log('---');
{
    function mulArrElementsByIndex(arr) {
        function multiplyByIndex(number, index) {
            return number * index;
        }

        return arr.map(multiplyByIndex);
    }

    console.log({
        numbers,
        result: mulArrElementsByIndex(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');
{
    function filterPositives(arr) {
        function selectPositiveNumbers(number) {
            return number > 0;
        }

        return arr.filter(selectPositiveNumbers);
    }

    console.log({
        numbers,
        result: filterPositives(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
    function filterNegatives(arr) {
        function selectNegativeNumbers(number) {
            return number < 0;
        }

        return arr.filter(selectNegativeNumbers);
    }

    console.log({
        numbers,
        result: filterNegatives(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
    function filterEquals(arr) {
        function selectEvenNumbers(number) {
            return number % 2 === 0 && number % 1 === 0;
        }

        return arr.filter(selectEvenNumbers);
    }

    console.log({
        numbers,
        result: filterEquals(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
    function filterOdds(arr) {
        function selectOddNumbers(number) {
            return number % 2 === 1 || number % 2 === -1;
        }

        return arr.filter(selectOddNumbers);

    }

    console.log({
        numbers,
        result: filterOdds(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
{
    function arrAbsoluteValues(arr) {
        function convertNegativesToPositives(number) {
            return number < 0 ? number * -1 : number;
        }

        return arr.map(convertNegativesToPositives)
    }

    console.log('---');
    console.log({
        numbers,
        result: arrAbsoluteValues(numbers)
    });
    console.log('---');
}
console.groupEnd();
console.log();

console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
console.log('---');
{
    function powArrElementsByIndex(arr) {
        function empowerByIndex(number, index) {
            return number ** index;
        }

        return arr.map(empowerByIndex);
    }

    console.log({
        numbers,
        result: powArrElementsByIndex(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
    function filterNaturals(arr) {
        function filterNaturalNumbers(number) {
            return number > 0 && number % 1 === 0
        }

        return arr.filter(filterNaturalNumbers)
    }

    console.log({
        numbers,
        result: filterNaturals(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
console.log('---');
{
    function absArrElements(arr) {
        function round(number) {
            const remainder = number % 1;
            let whole = number - remainder;

            if (remainder <= -0.5) {
                return whole -= 1;
            } else if (remainder >= 0.5) {
                return whole += 1;
            } else {
                return whole;
            }
        }

        return arr.map(round);
    }

    console.log({
        numbers,
        result: absArrElements(numbers)
    });
}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
    function filterEverySecond(arr) {
        function getEverySecond(_number, index) {
            return index % 2 === 0;
        }

        return arr.filter(getEverySecond);
    }

    console.log({
        numbers,
        result: filterEverySecond(numbers)
    });
}
console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
    function filterEveryFifth(arr) {
        function getEvery5th(_number, index) {
            return index % 5 === 0;
        }

        return arr.filter(getEvery5th);
    }

    console.log({
        numbers,
        result: filterEveryFifth(numbers)
    });
}
console.log('---');
console.groupEnd();


console.group('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
    function printArr(arr) {
        function dumpArrayInPhpStyle(number, index) {
            console.log(`[${index}] => ${number}`)
        }

        return arr.forEach(dumpArrayInPhpStyle)
    }

    printArr(numbers);
}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
    function sumArr(arr) {
        function arraySum(prevValue, number) {
            return prevValue + number;
        }

        return arr.reduce(arraySum);
    }

    console.log({
        numbers,
        result: sumArr(numbers)
    });
}
console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
    function avgArr(arr) {
        function arrayAvg(prevValue, number) {

            return prevValue + number;
        }

        return arr.reduce(arrayAvg) / arr.length;
    }

    console.log({
        numbers,
        result: avgArr(numbers)
    });
}
console.log('---');
console.groupEnd()

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
    function arrMax(arr) {
        function getBiggestElement(prevValue, number) {
            return prevValue >= number ?  prevValue : number;
        }

        return arr.reduce(getBiggestElement)
    }

    console.log({
        numbers,
        result: arrMax(numbers)
    });
}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
    function arrMin(arr) {
        function getSmallestElement(prevValue, number) {
            return prevValue <= number ?  prevValue : number;
        }

        return arr.reduce(getSmallestElement)
    }

    console.log({
        numbers,
        result: arrMin(numbers)
    });
}
console.log('---');
console.groupEnd();