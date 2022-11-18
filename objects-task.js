console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    const drinks = [
        {name: 'lemonade', price: 90},
        {name: 'lime', price: 432},
        {name: 'peach', price: 23}
    ];

    function sortDrinkByPrice(drinks) {

        return drinks.sort((a, b) => a.price - b.price);
    }

    console.log('drinks sorted by price, ascending:', sortDrinkByPrice(drinks));
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    function mergeObjects(obj, name, value) {

        return Object.assign(obj, {[name]: value})
    }

    console.log(
        'merged objects:',
        mergeObjects({}, "Brutus", 300),
        mergeObjects({ piano: 500 }, "Brutus", 400),
        mergeObjects({ piano: 500, stereo: 300 }, "Caligula", 440)
    )
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
    function generation(x, y) {
        const genList = {
            '-3m' : 'great grandfather',
            '-3f' : 'great grandmother',
            '-2m' : 'grandfather',
            '-2f' : 'grandmother',
            '-1m' : 'father',
            '-1f' : 'mother',
            '0m' : 'me!',
            '0f' : 'me!',
            '1m' : 'son',
            '1f' : 'daughter',
            '2m' : 'grandson',
            '2f' : 'granddaughter',
            '3m' : 'great grandson',
            '3f' : 'great granddaughter'
        }

        return genList[x + y]
    }

    console.log('generation:', generation(2, 'm'))
}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
    const tiles = [
        { tile: "N", score: 1 },
        { tile: "K", score: 5 },
        { tile: "Z", score: 10 },
        { tile: "X", score: 8 },
        { tile: "D", score: 2 },
        { tile: "A", score: 1 },
        { tile: "E", score: 1 }
    ];

    const result = maximumScore(tiles);

    function maximumScore(tiles) {
        let sum = 0;

        for (let i = 0; i < tiles.length; i += 1) {
            const tile = tiles[i];

            sum += tile.score;
        }

        return sum;
    }

    console.log('max tile score:', result);
}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
    const obj = { skate: 20000, painting: 30000, shoes: 1 };
    const obj2 = { "baseball bat": 31};
    const obj3 = {stereo: 110, pillow: 50};

    function calculateDifference(stolenItems, reimburseLimit) {
        let totalStolenItemsValue = 0;

        for (const item in stolenItems) {
            totalStolenItemsValue += stolenItems[item];
        }

        return totalStolenItemsValue - reimburseLimit;
    }

    console.log('reimburse value:', calculateDifference(obj, 50000));
    console.log('reimburse value:', calculateDifference(obj2, 10));
    console.log('reimburse value:', calculateDifference(obj3, 100));
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
    const objectExample1 = { a: 1, b: 2, c: 6 };
    const objectExample2 = { shrimp: 15, tots: 122};

    function toArray(obj) {
        const result = [];
        let i = 0;

        for (const key in obj) {
            result[i] = [key, obj[key]];
            i += 1;
        }

        return result;
    }

    console.log('array from object:', toArray(objectExample1));
    console.log('array from object:', toArray(objectExample2));
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
    const printer1 = { "cyan": 23, "magenta": 12, "yellow": 10 };
    const printer2 = { "cyan": 432, "magenta": 543, "yellow": 777 };
    const printer3 = { "cyan": 700, "magenta": 700, "yellow": 0 };
    const printer4 = { "cyan": 70, "magenta": 700, "yellow": 1 };
    const printer5 = { "cyan": 6543, "magenta": 74543, "yellow": 2345678 };
    const printer6 = { "cyan": 1, "magenta": 1, "yellow": 1};
    const printer7 = { "cyan": 700, "magenta": 700, "yellow": 700 };

    function inkLevels(inks) {
        const inksValues = Object.values(inks);

        return Math.min(...inksValues);
    }

    console.log('max pages can be printed:', inkLevels(printer1));
    console.log('max pages can be printed:', inkLevels(printer2));
    console.log('max pages can be printed:', inkLevels(printer3));
    console.log('max pages can be printed:', inkLevels(printer4));
    console.log('max pages can be printed:', inkLevels(printer5));
    console.log('max pages can be printed:', inkLevels(printer6));
    console.log('max pages can be printed:', inkLevels(printer7));

}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
    const list1 = { tv: 30, skate: 20, stereo: 50};
    const list2 = { ring: 30000, painting: 20000, bust: 1};
    const list3 = { chair: 3500};
    const list4 = {};

    function calculateLosses(stolenItemsList) {
        const itemsValue = Object.values(stolenItemsList);
        let totalLoss = 0;

        for (const loss in itemsValue) {
            totalLoss += itemsValue[loss];
        }

        if (!totalLoss) {
            return 'Lucky you!';
        }

        return totalLoss;
    }

    console.log('total loss:', calculateLosses(list1));
    console.log('total loss:', calculateLosses(list2));
    console.log('total loss:', calculateLosses(list3));
    console.log('total loss:', calculateLosses(list4));
}
console.groupEnd();