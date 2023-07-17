const faculties = [
    {
        name: 'IT',
        courses: [
            {
                courseName: 'Computer Engineering',
                requirements: {
                    aps: 20,
                    subjects: ['Maths', 'Science']
                }
            },
            {
                courseName: 'Information Technology: Software Development',
                requirements: {
                    aps: 20,
                    subjects: ['Maths', 'Science']
                }
            },
            {
                courseName: 'Information Technology: Web and Application Development',
                requirements: {
                    aps: 20,
                    subjects: ['Maths', 'Science']
                }
            }
        ]
    },
    {
        name: 'Science',
        courses: [
            {
                courseName: 'Biotechnology',
                requirements: {
                    aps: 0,
                    subjects: ['Maths', 'Science', 'Life Sciences']
                }
            },
            {
                courseName: 'Chemistry',
                requirements: {
                    aps: 20,
                    subjects: ['Maths', 'Science']
                }
            },
            {
                courseName: 'Industry Physics',
                requirements: {
                    aps: 30,
                    subjects: ['Maths', 'Science']
                }
            }
        ]
    },
    {
        name: 'Art & Design',
        courses: [
            {
                courseName: 'Design',
                requirements: {
                    aps: 0,
                    subjects: ['Maths', 'Science']
                }
            },
            {
                courseName: 'Performing Arts',
                requirements: {
                    aps: 30,
                    subjects: ['Maths', 'Science']
                }
            },
            {
                courseName: 'Fine Art',
                requirements: {
                    aps: 26,
                    subjects: ['Maths', 'Science']
                }
            }
        ]
    },
    {
        name: 'Humanities',
        courses: [
            {
                courseName: 'Education',
                requirements: {
                    aps: 30,
                    subjects: ['Maths', 'Science', 'English']
                }
            },
            {
                courseName: 'Journalism',
                requirements: {
                    aps: 20,
                    subjects: ['Maths', 'Science', 'English']
                }
            }
        ]
    }
]


const dropDown = document.getElementById("dropdownAps");
let selectedAps;
dropDown.addEventListener('change', checkAps)
console.log(dropDown);

function checkAps(aps) {
  
    selectedAps = parseInt(aps.target.value);
    console.log(selectedAps);
};


const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const checkboxGroup = document.getElementById('checkbox-group');

checkboxGroup.addEventListener('click', checkbox);
console.log(checkboxes)
let selectedCheck = [];

function checkbox(e) {
    e.stopPropagation();

let value=e.target.value
    // console.log(e.target)
    if(e.target.checked){
            selectedCheck.push(value)   
    }else{
        let index = selectedCheck.indexOf(value)
        selectedCheck.splice(index,1)
        
    }
 
    
console.log(selectedCheck);
};



console.log(document.getElementById("myForm"));
let studentCourses = [];

function checkCourse(e) {
    e.preventDefault()

    
    const pop = document.getElementById("coursedrop");


    for (let i = 0; i < faculties.length; i++) {
        let faculty = faculties[i];

        for (let j = 0; j < faculty.courses.length; j++) {
            let course = faculty.courses[j]
            let subs = course.requirements.subjects;
            let requiredAps = course.requirements.aps
            console.log(requiredAps);
           

            if (selectedAps >= requiredAps) {
                let subsMatch = false
                

                for(let k = 0; k < subs.length; k++) {
                    let requiredSubject = subs
                    if(selectedCheck.includes(requiredSubject)) {
                        subsMatch = true
                    } else { 
                        subsMatch = false
                        break
                    }
                }

                if(subsMatch === false) {

                    let item = course.courseName
            
                    const o = document.createElement("option");
                        o.innerText=item;
                        pop.appendChild(o);
                        console.log(item);

                       console.log(studentCourses)
                }


            }
            }
          }

  
}
function signForm(){

    const popSelect = document.getElementById('coursedrop')
    const popSelectedOption = popSelect.options[popSelect.selectedIndex].value;
    studentCourses.push(popSelectedOption)
  
    
    const form = document.querySelector('form');
    const formData = new FormData(form);
    const data = {};
  
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
  
    data.studentCourses=studentCourses;
    console.log(data)
    alert(JSON.stringify(data))
};





