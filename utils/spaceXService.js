const BASE_URL = "https://api.spacexdata.com/v4";

export const fetchLaunches = async () => {
  try {
    const response = await fetch(`${BASE_URL}/launches`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching launches:", error);
    return [];
  }
};

export const fetchRocket = async (rocketId) => {
  try {
    const response = await fetch(`${BASE_URL}/rockets/${rocketId}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching rocket details:", error);
    return null;
  }
};
