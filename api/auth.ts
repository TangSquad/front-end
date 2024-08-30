import axios from 'axios';
import apiClient from './apiClient';
import { api } from '../constants';

interface LoginRequestData {
  email: string;
  password: string;
}

interface LoginResponseData {
  success: boolean;
  message: string;
  data: {
    accessToken: string,
    refreshToken: string,
    type: string,
  };
}

const loginUser = async ({ email, password }: LoginRequestData): Promise<LoginResponseData> => {
  try {
    const response = await apiClient.post<LoginResponseData>(api.ENDPOINTS.AUTH.EMAIL_LOGIN, {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle Axios error
      throw new Error(error.response?.data.message || 'Failed to login');
    } else {
      // Handle non-Axios error
      throw new Error('Failed to login');
    }
  }
};

export {
  loginUser,
};