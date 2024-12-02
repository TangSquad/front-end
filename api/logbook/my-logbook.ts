import axios from 'axios';
import apiClient from '../apiClient';
import { api } from 'constants/';
import { Logbook, CreateLogbook } from 'types/Logbook';

const getMyLogbook = async (): Promise<Logbook[]> => {
  try {
    const response = await apiClient.get<Logbook[]>(api.ENDPOINTS.LOGBOOK.MY_LOGBOOK);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'Failed to get logbooks');
    } else {
      throw new Error('Failed to get logbooks');
    }
  }
};

const createLogbook = async (logbook: CreateLogbook): Promise<Logbook> => {
  try {
    const response = await apiClient.post<Logbook>(api.ENDPOINTS.LOGBOOK.MY_LOGBOOK, logbook);
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
  createLogbook,
};