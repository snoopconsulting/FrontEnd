import { URL_PROCESSES } from "../constants/processes"

const getProcesses = async () => {
  let processes = [];

  try {
    let res = await fetch(URL_PROCESSES);

    if (res) {
      let response = await res.json();

      response.map(e => processes.push(e));
    }
  } catch (error) {
    console.log(`Error al traer datos processes - ${error}`);
  }

  return processes;
}

export default getProcesses;