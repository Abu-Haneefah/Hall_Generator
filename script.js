// THIS CODE ABOVE WILL GENERATE RANDOM HALL FOR THE NAMES OF STUDENTS INPUTED
// var examHall = new Array("Hall 1","Hall 2","Hall 3");
// var randomHall = Math.floor(Math.random() * examHall.length);
// var studentHall = examHall[randomHall];
// var studentName = document.querySelector("#myInput");

// var firstButton = document.querySelector(".btn"); // the generate button
// firstButton.addEventListener("click", function(){
    //THIS CODE DISTRIBUTE STUDENTS INTO DIFFERENT HALLS
//     if(studentName.value === ""){ 
//         document.querySelector("#hall").style.visibility = "hidden";
//     }
//     else{
//     document.querySelector("#hall").innerHTML = 'Hello ' + studentName.value + ' you are in ' + studentHall; 
//    var hallStatement= document.querySelector("#hall").style.visibility = "visible";
//     };
// });
// var keyButton = document.addEventListener("keydown", function(event){
//     if(studentName.value === ""){
//         document.querySelector("#hall").style.visibility = "hidden";
//     }
//     else if(event.KeyCode === 13 || event.which === 13){   // SELECTS THE ENTER KEY
//         event.preventDefault();
//      document.querySelector("#hall").innerHTML = 'Hello ' + studentName.value + ' you are in ' + studentHall; 
//      var hallStatement= document.querySelector("#hall").style.visibility = "visible";
 
//     }
// });

// Array of exam halls
const examHalls = ["Hall 1", "Hall 2", "Hall 3"];

// Select elements
const generateBtn = document.getElementById("generateBtn");
const resetBtn = document.getElementById("resetBtn");
const myInput = document.getElementById("myInput");
const hallOutput = document.getElementById("hall");

// Generate Hall on Button Click
generateBtn.addEventListener("click", () => {
    const studentName = myInput.value.trim();
    if (studentName === "") {
        hallOutput.style.visibility = "hidden";
    } else {
        const randomHall = examHalls[Math.floor(Math.random() * examHalls.length)];
        hallOutput.textContent = "Hello " + studentName+ " , you are in " + randomHall;
        hallOutput.style.visibility = "visible";
    }
});

// Reset Form
resetBtn.addEventListener("click", () => {
    myInput.value = "";
    hallOutput.style.visibility = "hidden";
});