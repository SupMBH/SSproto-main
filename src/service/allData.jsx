import CallMock from './IsMocked';
import CallApi from './callApi';
import axios from 'axios';

let callOnApi = false; // Initialisation à false

// Fonction pour vérifier la disponibilité de l'API
const checkApiAvailability = async () => {
  try {
    const response = await axios.get('http://localhost:3000/user/12'); // Interroger un endpoint existant
    if (response.status === 200) {
      callOnApi = true;
    }
  } catch (error) {
    console.error('API not available, switching to mock data');
    callOnApi = false;
  }
};

// Exécuter la vérification de l'API avant de définir callOnData
const initializeCallOnData = async () => {
  await checkApiAvailability();

  const callOnData = callOnApi ? CallApi : CallMock;
  console.log(callOnData);

  // Affichage de l'alerte
  const message = callOnApi ? "Vous utilisez les données de l'API" : "Vous utilisez les données Mockées";
  alert(message);

  return callOnData;
};

// Initialisation au démarrage
let callOnData = null;
initializeCallOnData().then(dataModule => {
  callOnData = dataModule;
});

/**
 * 
 * @param {string} kind 
 * @param {number} userId 
 * @returns Array of data
 */
export const AllData = async (kind, userId) => {
  // Attendre l'initialisation de callOnData
  while (!callOnData) {
    await new Promise(resolve => setTimeout(resolve, 100)); // Attendre 100ms avant de vérifier à nouveau
  }

  let data = [];

  switch (kind) {
    case "UserInfos":
      data = await callOnData.getInfos(userId);
      break;
    case "UserActivity":
      data = await callOnData.getActivity(userId);
      break;
    case "UserSessions":
      data = await callOnData.getSessions(userId);
      break;
    case "UserPerformance":
      data = await callOnData.getPerformance(userId);
      break;
    default:
      console.log("données non disponibles");
  }

  return data;
};
