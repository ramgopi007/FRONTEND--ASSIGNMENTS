let backlogs = document.getElementById("backlogs");
backlogs.style.borderRadius = "6px";

let backdiv = document.createElement("div");
backdiv.style.borderBottom = "1px solid black";
backdiv.style.height = "60px";
backdiv.style.borderRadius = "6px";
backdiv.style.display = "flex";
backdiv.style.gap = "170px";
backdiv.style.backgroundColor = "white";

let backheading = document.createElement("h4");
backheading.textContent = "BACKLOGS";
backheading.style.marginTop = "13px";
backheading.style.marginLeft = "13px";
backheading.style.fontFamily = "monospace";
backheading.style.fontSize = "20px";

let backbutton = document.createElement("button");
backbutton.textContent = "Create";
backbutton.style.borderRadius = "20px";
backbutton.style.height = "40px";
backbutton.style.paddingLeft = "20px";
backbutton.style.paddingRight = "20px";
backbutton.style.marginTop = "10px";
backbutton.style.fontFamily = "monospace";
backbutton.style.backgroundColor = "lightgreen";
backbutton.style.fontWeight="bold";

backlogs.appendChild(backdiv);
backdiv.appendChild(backheading);
backdiv.appendChild(backbutton);

//TodoList //
let todo = document.getElementById("todos");
todo.style.borderRadius = "6px";

let tododiv = document.createElement("div");
tododiv.style.borderBottom = "1px solid black";
tododiv.style.height = "60px";
tododiv.style.borderRadius = "6px";
tododiv.style.display = "flex";
tododiv.style.gap = "170px";
tododiv.style.backgroundColor = "white";

let todoheading = document.createElement("h4");
todoheading.textContent = "TODOLIST";
todoheading.style.marginTop = "13px";
todoheading.style.marginLeft = "13px";
todoheading.style.fontFamily = "monospace";
todoheading.style.fontSize = "20px";

let todobutton = document.createElement("button");
todobutton.textContent = "Create";
todobutton.style.borderRadius = "20px";
todobutton.style.height = "40px";
todobutton.style.paddingLeft = "20px";
todobutton.style.paddingRight = "20px";
todobutton.style.marginTop = "10px";
todobutton.style.fontFamily = "monospace";
todobutton.style.backgroundColor = "lightgreen";
todobutton.style.fontWeight="bold";

todo.appendChild(tododiv);
tododiv.appendChild(todoheading);
tododiv.appendChild(todobutton);

//Uidesign //
let uidesign = document.getElementById("uidesign");
uidesign.style.borderRadius = "6px";

let uidesigndiv = document.createElement("div");
uidesigndiv.style.borderBottom = "1px solid black";
uidesigndiv.style.height = "60px";
uidesigndiv.style.borderRadius = "6px";
uidesigndiv.style.display = "flex";
uidesigndiv.style.gap = "170px";
uidesigndiv.style.backgroundColor = "white";

let uidesignheading = document.createElement("h4");
uidesignheading.textContent = "UIDESIGN";
uidesignheading.style.marginTop = "13px";
uidesignheading.style.marginLeft = "13px";
uidesignheading.style.fontFamily = "monospace";
uidesignheading.style.fontSize = "20px";

let uidesignbutton = document.createElement("button");
uidesignbutton.textContent = "Create";
uidesignbutton.style.borderRadius = "20px";
uidesignbutton.style.height = "40px";
uidesignbutton.style.paddingLeft = "20px";
uidesignbutton.style.paddingRight = "20px";
uidesignbutton.style.marginTop = "10px";
uidesignbutton.style.fontFamily = "monospace";
uidesignbutton.style.backgroundColor = "lightgreen";
uidesignbutton.style.fontWeight="bold";

uidesign.appendChild(uidesigndiv);
uidesigndiv.appendChild(uidesignheading);
uidesigndiv.appendChild(uidesignbutton);

//Frontend //
let frontend = document.getElementById("frontend");
frontend.style.borderRadius = "6px";

let frontenddiv = document.createElement("div");
frontenddiv.style.borderBottom = "1px solid black";
frontenddiv.style.height = "60px";
frontenddiv.style.borderRadius = "6px";
frontenddiv.style.display = "flex";
frontenddiv.style.gap = "170px";
frontenddiv.style.backgroundColor = "white";

let frontendheading = document.createElement("h4");
frontendheading.textContent = "FRONTEND";
frontendheading.style.marginTop = "13px";
frontendheading.style.marginLeft = "13px";
frontendheading.style.fontFamily = "monospace";
frontendheading.style.fontSize = "20px";

let frontendbutton = document.createElement("button");
frontendbutton.textContent = "Create";
frontendbutton.style.borderRadius = "20px";
frontendbutton.style.height = "40px";
frontendbutton.style.paddingLeft = "20px";
frontendbutton.style.paddingRight = "20px";
frontendbutton.style.marginTop = "10px";
frontendbutton.style.fontFamily = "monospace";
frontendbutton.style.backgroundColor = "lightgreen";
frontendbutton.style.fontWeight="bold";

frontend.appendChild(frontenddiv);
frontenddiv.appendChild(frontendheading);
frontenddiv.appendChild(frontendbutton);

//testing //
let testing = document.getElementById("testing");
testing.style.borderRadius = "6px";

let testingdiv = document.createElement("div");
testingdiv.style.borderBottom = "1px solid black";
testingdiv.style.height = "60px";
testingdiv.style.borderRadius = "6px";
testingdiv.style.display = "flex";
testingdiv.style.gap = "170px";
testingdiv.style.backgroundColor = "white";

let testingheading = document.createElement("h4");
testingheading.textContent = "TESTING";
testingheading.style.marginTop = "13px";
testingheading.style.marginLeft = "13px";
testingheading.style.fontFamily = "monospace";
testingheading.style.fontSize = "20px";

let testingbutton = document.createElement("button");
testingbutton.textContent = "Create";
testingbutton.style.borderRadius = "20px";
testingbutton.style.height = "40px";
testingbutton.style.paddingLeft = "20px";
testingbutton.style.paddingRight = "20px";
testingbutton.style.marginTop = "10px";
testingbutton.style.fontFamily = "monospace";
testingbutton.style.backgroundColor = "lightgreen";
testingbutton.style.fontWeight="bold";

testing.appendChild(testingdiv);
testingdiv.appendChild(testingheading);
testingdiv.appendChild(testingbutton);

//backend //
let backend = document.getElementById("backend");
backend.style.borderRadius = "6px";

let backenddiv = document.createElement("div");
backenddiv.style.borderBottom = "1px solid black";
backenddiv.style.height = "60px";
backenddiv.style.borderRadius = "6px";
backenddiv.style.display = "flex";
backenddiv.style.gap = "170px";
backenddiv.style.backgroundColor = "white";

let backendheading = document.createElement("h4");
backendheading.textContent = "BACKEND";
backendheading.style.marginTop = "13px";
backendheading.style.marginLeft = "13px";
backendheading.style.fontFamily = "monospace";
backendheading.style.fontSize = "20px";

let backendbutton = document.createElement("button");
backendbutton.textContent = "Create";
backendbutton.style.borderRadius = "20px";
backendbutton.style.height = "40px";
backendbutton.style.paddingLeft = "20px";
backendbutton.style.paddingRight = "20px";
backendbutton.style.marginTop = "10px";
backendbutton.style.fontFamily = "monospace";
backendbutton.style.backgroundColor = "lightgreen";
backendbutton.style.fontWeight="bold";

backend.appendChild(backenddiv);
backenddiv.appendChild(backendheading);
backenddiv.appendChild(backendbutton);

//deployment//
let deployment = document.getElementById("deployment");
deployment.style.borderRadius = "6px";

let deploymentdiv = document.createElement("div");
deploymentdiv.style.borderBottom = "1px solid black";
deploymentdiv.style.height = "60px";
deploymentdiv.style.borderRadius = "6px";
deploymentdiv.style.display = "flex";
deploymentdiv.style.gap = "170px";
deploymentdiv.style.backgroundColor = "white";

let deploymentheading = document.createElement("h4");
deploymentheading.textContent = "DEPLOYMENT";
deploymentheading.style.marginTop = "13px";
deploymentheading.style.marginLeft = "13px";
deploymentheading.style.fontFamily = "monospace";
deploymentheading.style.fontSize = "20px";

let deploymentbutton = document.createElement("button");
deploymentbutton.textContent = "Create";
deploymentbutton.style.borderRadius = "20px";
deploymentbutton.style.height = "40px";
deploymentbutton.style.paddingLeft = "20px";
deploymentbutton.style.paddingRight = "20px";
deploymentbutton.style.marginTop = "10px";
deploymentbutton.style.fontFamily = "monospace";
deploymentbutton.style.backgroundColor = "lightgreen";
deploymentbutton.style.fontWeight="bold";

deployment.appendChild(deploymentdiv);
deploymentdiv.appendChild(deploymentheading);
deploymentdiv.appendChild(deploymentbutton);




