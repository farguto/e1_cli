import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt";

inquirer.registerPrompt("date",DatePrompt);

export async function promptNewUser(){
    return await inquirer.prompt(newUserPrompt);
}


const newUserPrompt = [
    {
        type:"input",
        name:"spent_price",
        message:"Importe: "
    },
    {
        type:"input",
        name:"spent_name",
        message:"En concepto de: "
    },
    {
        type:"date",
        name:"spent_date",
        message: "Ingrese la fecha de compra: ",
        locale:"es-ES",
        format:{month:"short",hour:undefined,minute:undefined},
    },
 
];