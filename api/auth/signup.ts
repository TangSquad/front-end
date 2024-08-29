import axios from 'axios';
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
  data: boolean;
}

const signup = async ({ email, password, name, phone }: SignupRequest): Promise<SignupResponse> => {
  try {
    const response = await axios.post<SignupResponse>(api.ENDPOINTS.AUTH.SIGNUP, {
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