import axios from 'axios';
import apiClient from '../apiClient';
import { api } from '../../constants';

interface WithdrawResponseData {
  success: true;
  message: string;
  data: {
    success: true;
    message: string;
  }
}

const deleteAccount = async (): Promise<WithdrawResponseData> => {
  try {
    const response = await apiClient.delete<WithdrawResponseData>(api.ENDPOINTS.AUTH.DELETE_ACCOUNT);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'Failed to delete account');
    } else {
      throw new Error('Failed to delete account');
    }
  }
};

export {
  deleteAccount,
};