const people = [
    {
        name: 'Jonas',
        surname: 'Jonaitis',
        sex: 'male',
        age: 26,
        income: 1200,
        married: false,
        hasCar: false
    },
    {
        name: 'Severija',
        surname: 'Piktutytė',
        sex: 'female',
        age: 26,
        income: 1300,
        married: false,
        hasCar: true
    },
    {
        name: 'Valdas',
        surname: 'Vilktorinas',
        sex: 'male',
        age: 16,
        income: 0,
        married: false,
        hasCar: false
    },
    {
        name: 'Virginijus',
        surname: 'Uostauskas',
        sex: 'male',
        age: 32,
        income: 2400,
        married: true,
        hasCar: true
    },
    {
        name: 'Samanta',
        surname: 'Uostauskienė',
        sex: 'female',
        age: 28,
        income: 1200,
        married: true,
        hasCar: true
    },
    {
        name: 'Janina',
        surname: 'Stalautinskienė',
        sex: 'female',
        age: 72,
        income: 364,
        married: false,
        hasCar: false
    }
];
console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
{
    people.forEach(function({name, surname, sex, age, income, married, hasCar}) {
        console.log(`${name} ${surname} - ${sex} ${age} ${income} ${married} ${hasCar}`)
    })
}
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių varus ir pavardes, atskirtus brūkšneliu');
{
    let namesList = '';

    people.forEach(function({name, surname}) {
        namesList += `${name} - ${surname}, `;
    });

    namesList = namesList.slice(0, -2)

    console.log(namesList);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
    let marriageStatusList = '';

    people.forEach(function({name, surname, married}) {
        marriageStatusList += `${name} ${surname}, is married: ${married}. `;
    });

    marriageStatusList = marriageStatusList.slice(0, -2);

    console.log(marriageStatusList);
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
    console.log(people.map(function({sex, income}) { return [sex, income]; }));
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
    console.log(people.map(function({name, surname, sex}) {
        return `${name} ${surname} ${sex}`
    }));
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
    console.log(people.filter(function({sex}) {
        return sex === 'male';
    }));
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
    console.log(people.filter(function({sex}) {
        return sex === 'female';
    }));
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
    let carOwners = '';

    people.forEach(function({hasCar, name, surname}) {
        if (hasCar) {
            carOwners += `${name} ${surname}, `;
        }
    })

    carOwners = carOwners.slice(0, -2);

    console.log(carOwners);
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
    let marriedPeople = '';

    people.forEach(function({married, name, surname}) {
        if(married) {
            marriedPeople += `${name} ${surname}, `;
        }
    });

    marriedPeople = marriedPeople.slice(0, -2);

    console.log(marriedPeople);
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
    function assignDriverCountReducer(prevDriversBySex, {hasCar, sex}) {
        if (hasCar) {
            sex === 'male' ? prevDriversBySex.male += 1 : prevDriversBySex.female += 1;
        }

        return prevDriversBySex;
    }

    console.log(people.reduce(assignDriverCountReducer, { male: 0, female: 0 }));
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
    console.log(people.map(function({income, ...rest}) {
        return {salary: income, ...rest};
    }));
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės');
{
    console.log(people.map(function({age, income, married, hasCar}) {
        return {age, income, married, hasCar}
    }));
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
    console.log(people.map(function({name, surname, ...rest}) {
        return {fullname: `${name} ${surname}`, ...rest}
    }));
}
console.groupEnd();