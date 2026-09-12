import isPassing, { computeAverage } from "./gradeUtils.js";

const enrollees = [
    { name: "Ana Cruz", prelim: 85, midterm: 90, final: 88 },
    { name: "Bea Santos", prelim: 70, midterm: 65, final: 60 },
    { name: "Cid Ramos", prelim: 95, midterm: 92, final: 97 },
    { name: "Dex Alonzo", prelim: 60, midterm: 55, final: 50 },
    { name: "Eli Tan", prelim: 78, midterm: 80, final: 76 }
];

const getEnrollees = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(enrollees);
        }, 1000);
    });
};

const checkEligibility = async () => {
    try {
        const data = await getEnrollees();

        const results = data.map((student) => {
            const { name, prelim, midterm, final } = student;

            const average = computeAverage(prelim, midterm, final);

            const status = isPassing(average)
                ? "PASSING"
                : "PROBATION";

            return {
                name,
                average,
                status
            };
        });

        const passingStudents = results.filter(
            (student) => student.status === "PASSING"
        );

        const classAverage = results.reduce(
            (total, student) => total + student.average,
            0
        ) / results.length;

        console.log("=== IT313 Enrollment Eligibility Report ===");

        results.forEach((student) => {
            console.log(
                `${student.name} - Average: ${student.average.toFixed(2)} - ${student.status}`
            );
        });

        console.log(`Class Average: ${classAverage.toFixed(2)}`);
        console.log(`Passing: ${passingStudents.length} / ${results.length}`);
    } catch (error) {
        console.log(`Connection failed: ${error.message}`);
    }
};

checkEligibility();