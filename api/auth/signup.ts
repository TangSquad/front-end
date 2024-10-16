import axios from 'axios';
import apiClient from '../apiClient';
import { api } from '../../constants';

interface SignupRequest {
  email: string;
  password: string;
  name: string;
  phone: string;
}

interface SignupResponse {
  success: boolean;
  message: string;
  data: {
    accessToken: string,
    refreshToken: string,
    type: string,
  };
}

const signup = async ({ email, password, name, phone }: SignupRequest): Promise<SignupResponse> => {
  try {
    const response = await apiClient.post<SignupResponse>(api.ENDPOINTS.AUTH.SIGNUP, {
      email,
      password,
      name,
      phone,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'Failed to sign up');
    } else {
      throw new Error('Failed to sign up');
    }
  }
};

export default signup;