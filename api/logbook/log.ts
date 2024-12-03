import axios from 'axios';
import apiClient from '../apiClient';
import { api } from 'constants/';
import { Log } from 'types/Logbook';

const getLogById = async (id: number): Promise<Log> => {
  try {
    const response = await apiClient.get<Log>(`${api.ENDPOINTS.LOGBOOK.LOG}/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'Axios failed to get log');
    } else {
      throw new Error('Failed to get log');
    }
  }
};

const getLogsByLogbookId = async (logbookId: number): Promise<Log[]> => {
  try {
    const response = await apiClient.get<Log[]>(`${api.ENDPOINTS.LOGBOOK.LOG_BY_LOOGBOOK_ID}/${logbookId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'Axios failed to get logs');
    } else {
      throw new Error('Failed to get logs');
    }
  }
};

const createLog = async (log: Log): Promise<Log> => {
  try {
    const response = await apiClient.post<Log>(api.ENDPOINTS.LOGBOOK.LOG, log);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'Failed to get logbooks');
    } else {
      throw new Error('Failed to get logbooks');
    }
  }
};

export {
  getLogById,
  getLogsByLogbookId,
  createLog,
};