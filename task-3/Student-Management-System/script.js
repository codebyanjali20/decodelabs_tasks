let students = JSON.parse(localStorage.getItem("students")) || [];
let editIndex = -1;
displayStudents();
document.getElementById("addBtn").addEventListener("click",saveStudent);
document.getElementById("themeBtn").addEventListener("click",()=> {
    document.body.classList.toggle("dark");
});
document.getElementById("search").addEventListener("keyup",searchStudent);  
function saveStudent() {
    let name = document.getElementById("name").value.trim();
     let age = document.getElementById("age").value.trim();
     let course = document.getElementById("course").value.trim();
     if(name === "" || age == "" || course === "" ){
        alert("Please fill all fields.");
        return;
     }
     if(editIndex === -1){
        students.push({
            name,age,course,present:true
        })
     } else {
        students[editIndex].name = name;
        students[editIndex].age = age;
        students[editIndex].course = course;
        editIndex = -1;
        document.getElementById("addBtn").innerText = "Add Student";
     }
     saveData();
     clearForm();
     displayStudents();
} 

function displayStudents(list = students) {

    let table = document.getElementById("studentTable");

    table.innerHTML = "";

    list.forEach((student, index) => {

        table.innerHTML += `
        <tr>

        <td>${student.name}</td>

        <td>${student.age}</td>

        <td>${student.course}</td>

        <td>
            <button onclick="toggleAttendance(${index})">
            ${student.present ? "Present" : "Absent"}
            </button>
        </td>

        <td>

        <button class="editBtn" onclick="editStudent(${index})">
        Edit
        </button>

        <button class="deleteBtn" onclick="deleteStudent(${index})">
        Delete
        </button>

        </td>

        </tr>
        `;
    });

    updateDashboard();
}

// Delete Student
function deleteStudent(index) {

    if (confirm("Delete this student?")) {
        students.splice(index, 1);
        saveData();
        displayStudents();
    }

}

// Edit Student
function editStudent(index) {

    let student = students[index];

    document.getElementById("name").value = student.name;
    document.getElementById("age").value = student.age;
    document.getElementById("course").value = student.course;

    editIndex = index;

    document.getElementById("addBtn").innerText = "Update Student";

}

// Attendance
function toggleAttendance(index) {

    students[index].present = !students[index].present;

    saveData();

    displayStudents();

}

// Search
function searchStudent() {

    let value = document.getElementById("search").value.toLowerCase();

    let filtered = students.filter(student =>
        student.name.toLowerCase().includes(value)
    );

    displayStudents(filtered);

}

// Dashboard
function updateDashboard() {

    document.getElementById("totalStudents").innerText = students.length;

    let present = students.filter(student => student.present).length;

    document.getElementById("presentStudents").innerText = present;

    document.getElementById("absentStudents").innerText = students.length - present;

}

// Local Storage
function saveData() {

    localStorage.setItem("students", JSON.stringify(students));

}

// Clear Form
function clearForm() {

    document.getElementById("name").value = "";

    document.getElementById("age").value = "";

    document.getElementById("course").value = "";

}