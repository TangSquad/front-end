import axios from 'axios';
import { api } from '../../constants';

interface PhoneRequestData {
  phoneNumber: string;
}

interface PhoneResponseData {
  success: boolean;
  message: string;
  data: string;
}

interface EmailRequestData {
  email: string;
}

interface EmailResponseData {
  success: boolean;
  message: string;
  data: string;
}

interface NicknameRequestData {
  nickname: string;
}

interface NicknameResponseData {
  success: boolean;
  message: string;
  data: string;
}

const checkPhoneDuplication = async ({ phoneNumber }: PhoneRequestData): Promise<PhoneResponseData> => {
  try {
    const response = await axios.post<PhoneResponseData>(api.ENDPOINTS.AUTH.PHONE_DUPLICATION_CHECK, {
      phoneNumber,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to check phone duplication');
    else
      throw new Error('Failed to check phone duplication');
  }
};

const checkEmailDuplication = async ({ email }: EmailRequestData): Promise<EmailResponseData> => {
  try {
    const response = await axios.post<EmailResponseData>(api.ENDPOINTS.AUTH.EMAIL_DUPLICATION_CHECK, {
      email,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to check email duplication');
    else
      throw new Error('Failed to check email duplication');
  }
};

const checkNicknameDuplication = async ({ nickname }: NicknameRequestData): Promise<NicknameResponseData> => {
  try {
    const response = await axios.post<NicknameResponseData>(api.ENDPOINTS.AUTH.NICKNAME_DUPLICATION_CHECK, {
      nickname,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to check nickname duplication');
    else
      throw new Error('Failed to check nickname duplication');
  }
};

export { checkPhoneDuplication, checkEmailDuplication, checkNicknameDuplication };