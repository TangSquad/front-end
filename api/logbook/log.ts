import axios from 'axios';
import apiClient from '../apiClient';
import { api } from 'constants/';
import { Log } from 'types/Logbook';

const createLog = async (log: Log): Promise<Log> => {
  try {
    const response = await apiClient.post<Log>(api.ENDPOINTS.LOGBOOK.MY_LOGBOOK, log);
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
  createLog,
};