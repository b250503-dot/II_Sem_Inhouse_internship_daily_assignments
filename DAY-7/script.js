 let studentName='rohan';
        let studentBranch='cse';
        let studentrollno=196;
        let studentmarks= 90;
        
        let students =
            {
               name:'rohan',
                branch:'cse',
                rollno:196,
                marks:98,
                skills:['html','css','js']
            } 
            console.log(studentName);
            console.log(studentBranch);
            console.log(studentrollno);
            console.log(studentmarks);
            console.log(students);

console.log(JSON.stringify(students));
let st='{"name":"rohan","branch":"cse","rollno":196,"marks":98,"skills":["html","css","js"]}';
console.log(JSON.parse(st));

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => console.log(data));