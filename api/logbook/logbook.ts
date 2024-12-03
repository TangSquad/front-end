import axios from 'axios';
import apiClient from '../apiClient';
import { api } from 'constants/';
import { Logbook, CreateLogbook } from 'types/Logbook';

const getMyLogbook = async (): Promise<Logbook[]> => {
  try {
    const response = await apiClient.get<Logbook[]>(api.ENDPOINTS.LOGBOOK.LOGBOOK);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'Axios failed to get logbooks');
    } else {
      throw new Error('Failed to get logbooks');
    }
  }
};

const getLogbookById = async (id: number): Promise<Logbook> => {
  try{
    const response = await apiClient.get<Logbook>(`${api.ENDPOINTS.LOGBOOK.LOGBOOK}/${id}`);
    return response.data;
  }
  catch(error){
    if(axios.isAxiosError(error)){
      throw new Error(error.response?.data.message || 'Axios failed to get logbook');
    }
    else{
      throw new Error('Failed to get logbook');
    }
  }
};

const createLogbook = async (logbook: CreateLogbook): Promise<Logbook> => {
  try {
    const response = await apiClient.post<Logbook>(api.ENDPOINTS.LOGBOOK.LOGBOOK, logbook);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'Axios failed to create logbook');
    } else {
      throw new Error('Failed to create logbook');
    }
  }
};

export {
  getMyLogbook,
  getLogbookById,
  createLogbook,
};