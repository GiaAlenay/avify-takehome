
import axios from 'axios';

const API_BASE_URL = "https://api.carbonintensity.org.uk"

export const getLast30MinUKGenerationData = async () => {
  try {

    const response = await axios.get(`${API_BASE_URL}/generation`);

   
    if(!response.data?.data?.generationmix || response.data?.data?.generationmix?.length ===0)throw new Error("No data available");
    
    return response.data;
  } catch (error) {
    console.error('Error fetching generation data:', error);
    throw error;
  }
}