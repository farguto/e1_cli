import { get, save } from "./filesMethods.js";
import inquirer from "inquirer";
import { promptNewUser } from "./userPrompts.js";

const main = async () => {
  let run = true;
  while (run) {
    const action = await inquirer.prompt([
      {
        type: "list",
        name: "chosen",
        message: "Elija por favor:",
        choices: [
          { value: 1, name: "Obtener todos los gastos" },
          { value: 2, name: "Agregar un nuevo gasto" },
          { value: 3, name: "Eliminar el último gasto" },
          { value: 99, name: "Salir" },
        ],
      },
    ]);
    switch (action.chosen) {
      case 1:
        await getAllSpents();
        break;
      case 2:
        await createNewSpent();
        break;
      case 3:
        await deleteSpent();
        break;
      case 99:
        run = false;
        break;
      default:
        run = false;
        break;
    }
  }
  console.log("Hasta luego");
};

main();

async function createNewSpent() {
  console.log("Agregando nueva compra...");
  const newUserData = await promptNewUser();
  console.log("Creando:", newUserData);
  const currentUsers = await get("users");

  currentUsers.push(newUserData);
  await save("users", currentUsers);
}

async function getAllSpents() {
  const currentUsers = await get("users");
  console.log(currentUsers);
}

async function deleteSpent() {

  let currentUsers = await get("users");
  const deletedSpent = currentUsers.pop();
  await save("users", currentUsers);
  console.log("El siguiente importe ha sido eliminado: ", deletedSpent);
}
