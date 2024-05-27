import inquirer from "inquirer";
let toDo = []; //we can also write in this way let todo = [] ;
let condition = true; //condition
while (condition) { //while loop
    let addTask = await inquirer.prompt([
        {
            name: "toDo",
            message: "What Do You Want To Add In Your toDo?",
            type: "input",
            // type : "list", 
            // choices :[ "samose", "pakore", "fruit chaat", "sharbat",]
        },
        {
            name: "addMore",
            message: "Do You Want To Add More",
            type: "confirm",
            default: "false",
        }
    ]);
    toDo.push(addTask.toDo);
    condition = addTask.addMore;
    console.log(toDo);
}
