import axios from 'axios';
import apiClient from '../apiClient';
import { api } from '../../constants';

interface LevelResponseData {
  success: boolean;
  message: string;
  data: LevelType[];
}

interface LevelType {
  id: number;
  name: string;
}

const getLevels = async (organizationId: number): Promise<LevelResponseData> => {
  try {
    const response = await apiClient.get<LevelResponseData>(api.ENDPOINTS.CERTIFICATE.LEVEL.replace('{organizationId}', organizationId.toString()));

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to get levels');
    else
      throw new Error('Failed to get levels');
  }
};

export {
  getLevels,
  LevelType,
};