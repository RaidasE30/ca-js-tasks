console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
    class Player {
        constructor(name, age, height, weight) {
            this.name = name;
            this.age = age;
            this.height = height;
            this.weight = weight;
        }

        getAge() {
            return `${this.name} is age ${this.age}`;
        }

        getHeight() {
            return `${this.name} is ${this.height}cm`;
        }

        getWeight() {
            return `${this.name} weighs ${this.weight}kg`;
        }
    }

    player1 = new Player('Patrick Mahomes', 24, 188, 104);
    player2 = new Player('Jimmy Garoppolo', 28, 188, 102);
    player3 = new Player('Julio Jones', 31, 191, 100);

    console.log(player1.getAge(), '<--expected result: Patrick Mahomes is age 24');
    console.log(player1.getHeight(), '<--expected result: Patrick Mahomes is 188cm');
    console.log(player1.getWeight(), '<--expected result: Patrick Mahomes weighs 104kg');

    console.log(player2.getAge(), '<--expected result: Jimmy Garoppolo is age 28');
    console.log(player2.getHeight(), '<--expected result: Jimmy Garoppolo is 188cm');
    console.log(player2.getWeight(), '<--expected result: Jimmy Garoppolo weighs 102kg');

    console.log(player3.getAge(), '<--expected result: Julio Jones is age 31');
    console.log(player3.getHeight(), '<--expected result: Julio Jones is 191cm');
    console.log(player3.getWeight(), '<--expected result: Julio Jones weighs 100kg');
}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
    class Calculator {
        add = (num1, num2) => num1 + num2;

        subtract = (num1, num2) => num1 - num2;

        multiply = (num1, num2) => num1 * num2;

        divide = (num1, num2) => num1 / num2;
    }

    const calculator = new Calculator();
    console.log(calculator.add(5,5), "<-- expected result: 10");
    console.log(calculator.add(20,5), "<-- expected result: 25");
    console.log(calculator.subtract(30,5), "<-- expected result: 25");
    console.log(calculator.subtract(100,5), "<-- expected result: 95");
    console.log(calculator.multiply(5,5), "<-- expected result: 25");
    console.log(calculator.multiply(100,5), "<-- expected result: 500");
    console.log(calculator.divide(10,5), "<-- expected result: 2");
    console.log(calculator.divide(100,5), "<-- expected result: 20");
}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
    class Employee {
        constructor (firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.fullname = `${this.firstname} ${this.lastname}`;
            this.email = (`${this.firstname}.${this.lastname}@company.com`).toLowerCase();
        }
    }

    emp1 = new Employee("John", "Smith");
    emp2 = new Employee("Mary",  "Sue");
    emp3 = new Employee("Antony", "Walker");
    emp4 = new Employee("Joshua", "Senoron");

    console.log(emp1.firstname, "<-- Expected result: John");
    console.log(emp1.lastname, "<-- Expected result: Smith");
    console.log(emp1.fullname, "<-- Expected result: John Smith");
    console.log(emp1.email, "<-- Expected result: john.smith@company.com");
    console.log(emp2.firstname, "<-- Expected result: Mary");
    console.log(emp2.lastname, "<-- Expected result: Sue");
    console.log(emp2.fullname, "<-- Expected result: Mary Sue");
    console.log(emp2.email, "<-- Expected result: mary.sue@company.com");
    console.log(emp3.firstname, "<-- Expected result: Antony");
    console.log(emp3.lastname, "<-- Expected result: Walker");
    console.log(emp3.fullname, "<-- Expected result: Antony Walker");
    console.log(emp3.email, "<-- Expected result: antony.walker@company.com");
    console.log(emp4.firstname, "<-- Expected result: Joshua");
    console.log(emp4.lastname, "<-- Expected result: Senoron");
    console.log(emp4.fullname, "<-- Expected result: Joshua Senoron");
    console.log(emp4.email, "<-- Expected result: joshua.senoconsole.log");
}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        compareAge(other) {
            if (other.age > this.age) {
                return `${other.name} is older than me.`;
            } else if (other.age < this.age) {
                return `${other.name} is younger than me.`;
            } else {
                return `${other.name} is the same age as me.`;
            }
        }
    }

    p1 = new Person("Samuel", 24);
    p2 = new Person("Joel", 36);
    p3 = new Person("Lily", 24);

    console.log(p1.compareAge(p2), "<-- Expected result: Joel is older than me.");
    console.log(p1.compareAge(p3), "<-- Expected result: Lily is the same age as me.");

    console.log(p2.compareAge(p1), "<-- Expected result: Samuel is younger than me.");
    console.log(p2.compareAge(p3), "<-- Expected result: Lily is younger than me.");

    console.log(p3.compareAge(p1), "<-- Expected result: Samuel is the same age as me.");
    console.log(p3.compareAge(p2), "<-- Expected result: Joel is older than me.");
}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
    class Circle {
        constructor (rad){
            this.rad = rad;
        }

        getArea = () => Math.PI * this.rad ** 2;
        getPerimeter = () => 2 * Math.PI * this.rad;
    }

    let q = new Circle(4.44);
    console.log(q.getArea(), '<-- Expected result: 61.93210093580775');
    console.log(q.getPerimeter(), '<-- Expected result: 27.897342763877365');

    // for testing purpose:
    function round(number) {
        const factor = Math.pow(10, 5);

        return Math.round(number * factor) / factor;
    }

    let circo = new Circle(20);
    console.log(round(circo.getArea()), '<-- Expected result: 1256.63706');
    console.log(round(circo.getPerimeter()), '<-- Expected result: 125.66371');

    let circo1 = new Circle(2);
    console.log(round(circo1.getArea()), '<-- Expected result: 12.56637');
    console.log(round(circo1.getPerimeter()), '<-- Expected result: 12.56637');

    let circo2 = new Circle(4.4);
    console.log(round(circo2.getArea()), '<-- Expected result: 60.82123');
    console.log(round(circo2.getPerimeter()),  '<-- Expected result: 27.64602');
}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
    // ... code
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
    // ... code
}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
    // ... code
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
    // ... code
}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
    // ... code
}
console.groupEnd();