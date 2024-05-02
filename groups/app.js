/*
Sukurti  atsitiktinių grupių kūrimo aplikaciją.
Formoje įvedama mokymų dalyvių duomenys: vardas ir pavardė.
Tai pat  nurodoma kiek grupių sukurti.
Mažiausias dalyvių skaičius   5, o didžiausias  20.
Reikia užtikrinti duomenų validavimą, kad būtu pateikti teisingi duomenys ir neleistų kurti grupių jeigu yra įvesta mažiau, kaip 5 dalyviai.
Paspaudžiamas mygtukas: Formuoti grupes.
Mokymo dalyviai sumaišomi ir suformuojamos grupes pagal formoje nurodytą grupių skaičių.
Grupės išvedamos ul listuose.
*/

const firstName = document.querySelector("#name");
const lastName = document.querySelector("#surname");
const submitStudent = document.querySelector("#submit-student");
const groupsInput = document.querySelector("#groups-number");
const submitGroups = document.querySelector("#submit-groups");
const listSection = document.querySelector("#list");
const formation = document.querySelector("#formation");
const studentList = [];
let groupsNum = 0;

const valueReseter = () => {
  for (value of document.querySelectorAll("input")) {
    value.value = "";
  }
};

submitStudent.onclick = (e) => {
  e.preventDefault();
  studentList.push(`${firstName.value} ${lastName.value}`);
  console.log(studentList);
  valueReseter();
  const studentMessage = document.createElement("p");
  studentMessage.textContent = "Student added.";
  studentMessage.style.color = "#008000";
  if (studentList.length > 20) {
    studentMessage.textContent = "Student number exceeded.";
    studentMessage.style.color = "#FF0000";
    studentList.pop();
    submitStudent.setAttribute("disabled", "true");
  }
  document.querySelector("#student-form").appendChild(studentMessage);
  window.setTimeout(() => {
    studentMessage.remove();
  }, 2000);
};

submitGroups.onclick = (e) => {
  e.preventDefault();
  groupsNum = parseInt(groupsInput.value);
  const groupMessage = document.createElement("p");
  if (studentList.length < 5) {
    groupMessage.textContent =
      "Too few students to form groups. Add more students.";
    groupMessage.style.color = "#FF0000";
    valueReseter();
  } else {
    groupMessage.textContent = "Done!";
    groupMessage.style.color = "#008000";
    valueReseter();
  }
  document.querySelector("#group-form").appendChild(groupMessage);
  window.setTimeout(() => {
    groupMessage.remove();
  }, 2000);
};

formation.addEventListener("click", (e) => {
  e.preventDefault();
  if (studentList.length >= 5 && studentList.length <= 20) {
    const shuffledStudentList = studentList.sort(() => Math.random() - 0.5);
    const studentsPerGroup = Math.ceil(studentList.length / groupsNum);
    for (let i = 0; i < groupsNum; i++) {
      const h3 = document.createElement("h3");
      h3.textContent = "Group " + (i + 1);
      listSection.appendChild(h3);
      const ul = document.createElement("ul");
      for (
        let j = i * studentsPerGroup;
        j < i * studentsPerGroup + studentsPerGroup;
        j++
      ) {
        const li = document.createElement("li");
        li.textContent = shuffledStudentList[j];
        ul.appendChild(li);
      }
      listSection.appendChild(ul);
    }
  }
});
