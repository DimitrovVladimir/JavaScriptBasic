function solve (arr){
    function parseStudent (str){
        let tokens = str.split('->');
        let name = tokens[0];
        let age = tokens[1];
        let grade = tokens[2];


        let obj = {name: name, age: age, grade: grade};
        return obj;

    }
    let student = arr.map(parseStudent);

        student.forEach(student=> {
            let studentStr =
                `Name: ${student.name}\n` +
                `Age: ${student.age}\n` +
                `Grade: ${student.grade}`;

            console.log(studentStr)
        });
}
let input =(('Pesho -> 13 -> 6.00\n' +
    'Ivan -> 12 -> 5.57\n' +
    'Toni -> 13 -> 4.90').split('\n'));
solve(input)
