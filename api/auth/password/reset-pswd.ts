import axios from 'axios';
import apiClient from '../../apiClient';
import { api } from 'constants/';

interface SendCodeResponseData{
  success: boolean;
  message: string;
  data: null;
}

const sendCode = async (email: string): Promise<SendCodeResponseData> => {
  try {
    const response = await apiClient.post<SendCodeResponseData>(api.ENDPOINTS.PASSWORD.SEND_CODE, {
      email,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'Failed to send code');
    } else {
      throw new Error('Failed to send code');
    }
  }
};

interface VerifyCodeResponseData {
  success: boolean;
  message: string;
  data: boolean;
}

const verifyCode = async ({ email, code }: { email: string; code: string; }): Promise<VerifyCodeResponseData> => {
  try {
    const response = await apiClient.post<VerifyCodeResponseData>(api.ENDPOINTS.PASSWORD.VERIFY_CODE, {
      email,
      code,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'Failed to verify code');
    } else {
      throw new Error('Failed to verify code');
    }
  }
};

export {
  sendCode,
  verifyCode,
};