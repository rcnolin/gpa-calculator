function calculateGPA(grades)
{
    //Calculate total sum of all grades
    let sum = 0;
    for(let i = 0; i < grades.length; i++)
    {
        let gradeValue = 0;

        //convert alpha grade to number
        if(grades[i] == "A")
        {
            gradeValue = 100;
        }
        else if(grades[i] == "B")
        {
            gradeValue = 80;
        }
        else if(grades[i] == "C")
        {
            gradeValue = 70;
        }

        sum += gradeValue;
    }

    //Calculate GPA
    let gpa = sum / grades.length;
    
    //Convert number gpa to alpha
    let finalGrade = "";
    if(gpa >= 70 && gpa <= 79)
    {
        finalGrade = "C";
    }
    else if(gpa >= 80 && gpa <= 99)
    {
        finalGrade = "B";
    }
    else if(gpa == 100)
    {
        finalGrade = "A";
    }

    return finalGrade;
}

let letterGrades = ["A", "B", "C"];
let result = calculateGPA(letterGrades);
document.write("Your grade is " + result);
console.log("Your grade is " + result);

