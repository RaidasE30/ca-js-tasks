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
    function printPeopleList(person) {
        console.log(`${person.name} ${person.surname} - ${person.sex} ${person.age} ${person.income} ${person.married} ${person.hasCar}`)
    }

    people.forEach(printPeopleList)

}
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių varus ir pavardes, atskirtus brūkšneliu');
{
    let namesList = '';

    function printPeopleNames(person) {
        namesList += `${person.name} - ${person.surname}, `
    }
    namesList = namesList.slice(0, -2)

    people.forEach(printPeopleNames)

    console.log(namesList);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
    let marriageStatusList = '';

    function printPeopleMarriageStatus(person) {
        marriageStatusList += `${person.name} ${person.surname}, is married: ${person.married}. `;
    }
    marriageStatusList = marriageStatusList.slice(0, -2);

    people.forEach(printPeopleMarriageStatus);

    console.log(marriageStatusList);
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{

    let sexAndSalary = [];

    function dumpSexAndSalary(person) {
        sexAndSalary.push([person.sex, person.income]);
    }

    people.forEach(dumpSexAndSalary)

    console.log(sexAndSalary)
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
    let namesAndSex = [];

    function dumpNamesAndSex(person) {
        namesAndSex.push(person.name, person.surname, person.sex);
    }

    people.forEach(dumpNamesAndSex);

    console.log(namesAndSex);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
    let malesList = '';

    function printAllMales(person) {
        if (person.sex === 'male') {
            malesList += `${person.name} ${person.surname}, `;
        }
    }

    people.forEach(printAllMales);

    malesList = malesList.slice(0, -2);

    console.log(malesList);

}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
    let femalesList = '';

    function printAllFemales(person) {
        if (person.sex === 'female') {
            femalesList += `${person.name} ${person.surname}, `;
        }
    }

    people.forEach(printAllFemales);

    femalesList = femalesList.slice(0, -2);

    console.log(femalesList);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
    let carOwners = '';

    function printCarOwners(person) {
        if (person.hasCar) {
            carOwners += `${person.name} ${person.surname}, `;
        }
    }

    people.forEach(printCarOwners)

    carOwners = carOwners.slice(0, -2);

    console.log(carOwners);
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
    let marriedPeople = '';

    function printMarriedPeople(person) {
        if (person.married) {
            marriedPeople += `${person.name} ${person.surname}, `;
        }
    }

    people.forEach(printMarriedPeople);

    marriedPeople = marriedPeople.slice(0, -2);

    console.log(marriedPeople);
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
    let drivers = {
        maleDrivers: 0,
        femaleDrivers: 0
    };

    function DriversBySexCount (person) {
        if (person.hasCar) {
            person.sex === 'male' ? drivers.maleDrivers += 1 : drivers.femaleDrivers += 1;
        }
    }

    people.forEach(DriversBySexCount)

    console.log(drivers);
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
    let moddedPeople = [];

    function incomeToSalaryChange(person) {
        let modifiedPerson = {
            name: person.name,
            surname: person.surname,
            sex: person.sex,
            age: person.age,
            salary: person.income,
            married: person.married,
            hasCar: person.hasCar
        };

        moddedPeople.push(modifiedPerson);

    }

    people.forEach(incomeToSalaryChange);

    console.log(moddedPeople)
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės');
{
    let newPeople = [];

    function replicateArrayWithLessProperties (person) {
        let obj = {
            name: person.name,
            surname: person.surname,
            sex: person.sex,
            age: person.age,
            salary: person.income,
            married: person.married,
            hasCar: person.hasCar
        };

        newPeople.push(obj);
    }

    people.forEach(replicateArrayWithLessProperties)

    console.log(newPeople);
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
    let newArray = [];

    function shortenPersonsNameKeys(person) {
        let obj = {
            fullname: `${person.name} ${person.surname}`,
            sex: person.sex,
            age: person.age,
            salary: person.income,
            married: person.married,
            hasCar: person.hasCar
        };

        newArray.push(obj);
    }

    people.forEach(shortenPersonsNameKeys)

    console.log(newArray)
}
console.groupEnd();