import axios from 'axios';
import apiClient from '../apiClient';
import { api } from '../../constants';

interface EquipmentType {
  height: string;
  weight: string;
  suit: string;
  weightBelt: number;
  bc: string;
  shoes: number;
  mask: string;
}

interface EquipmentResponse {
  success: boolean;
  message: string;
  data: EquipmentType;
}

const getMyEquipment = async (): Promise<EquipmentResponse> => {
  try {
    const response = await apiClient.get<EquipmentResponse>(api.ENDPOINTS.USER.EQUIPMENT);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to get equipment');
    else
      throw new Error('Failed to get equipment');
  }
};

export {
  getMyEquipment,
  EquipmentType,
};