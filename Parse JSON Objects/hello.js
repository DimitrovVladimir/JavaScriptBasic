function solve (arr){
    let students = arr.map(JSON.parse);
    students.forEach(students=>{
        let studentStr =
            `Name: ${students.name}\n` +
            `Age: ${students.age}\n` +
            `Date: ${students.date}`
        console.log(studentStr);
    })
}
let input = [`{"name":"Gosho","age":10,"date":"19/06/2005"}`, `{"name":"Tosho","age":11,"date":"04/04/2005"}`];
solve(input);