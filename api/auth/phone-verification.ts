import axios from 'axios';
import { api } from '../../constants';

interface CodeRequest {
  phoneNumber: string;
}

interface CodeResponse {
  success: boolean;
  message: string;
}

interface VerifyData {
  phoneNumber: string;
  code: string;
}

interface VerifyResponse {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
    type: string;
  };
}

const sendVerificationCode = async ({ phoneNumber }: CodeRequest): Promise<CodeResponse> => {
  try {
    const response = await axios.post<CodeResponse>(api.ENDPOINTS.AUTH.SEND_VERIFICATION_CODE, {
      phoneNumber,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to send verification code');
    else
      throw new Error('Failed to send verification code'); 
  }
};

const verifyPhoneNumber = async ({ phoneNumber, code }: VerifyData): Promise<VerifyResponse> => {
  try {
    const response = await axios.post<VerifyResponse>(api.ENDPOINTS.AUTH.VERIFY_PHONE_NUMBER, {
      phoneNumber,
      code,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'Failed to verify phone number');
    } else {
      throw new Error('Failed to verify phone number');
    }
  }
};

export { sendVerificationCode, verifyPhoneNumber };