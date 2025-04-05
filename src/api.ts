
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getLast30MinUKGenerationData = async () => {
  try {
    console.log(API_BASE_URL)
    const response = await axios.get(`${API_BASE_URL}/generation`);

   
    if(!response.data?.data?.generationmix || response.data?.data?.generationmix?.length ===0)throw new Error("No data available");
    
    return response.data;
  } catch (error) {
    console.error('Error fetching generation data:', error);
    throw error;
  }
}