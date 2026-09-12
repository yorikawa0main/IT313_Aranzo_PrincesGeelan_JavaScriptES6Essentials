# IT313 Laboratory 2 - Modern JavaScript ES6+ Essentials

## Problem

The program is an Enrollment Eligibility Checker for the IT313 registrar.

It receives a list of students with their prelim, midterm, and final grades. It calculates their average and determines whether they are PASSING or on PROBATION.

A student is PASSING if their average is 75 or above.

## Approach

The program uses modern JavaScript ES6+ features including:

- const
- arrow functions
- template literals
- destructuring
- map()
- filter()
- reduce()
- ES modules
- Promises
- async/await
- try/catch



### gradeUtils.js

It contains the computeAverage() function to calculate a student's average and 
isPassing() function To check if the average is 75 or higher.

### main.js

This contains the enrollee data, Promise, async/await processing, array methods, and formatted report.
The program imports these functions, stores the enrollee data, and uses a Promise with async/await to simulate getting student records. It then uses destructuring, map(), filter(), and reduce() to process the students, calculate their averages, identify passing students, and calculate the class average. Finally, it uses template literals to display the complete enrollment eligibility report in the terminal.

## How to Run

1. Open the project folder in VS Code.
2. Open the terminal.
4. Make sure you are inside in your folder
3. Run: node main.js and you will see your output, wowowow xd:DD