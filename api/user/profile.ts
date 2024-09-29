import axios from 'axios';
import apiClient from '../apiClient';
import { api } from '../../constants';

interface Profile {
    // userId: number;
    name: string;
    nickname: string;
    clubCount: number;
    divingCount: number;
    logBookCount: number;
    profileImageUrl: string;
  }

interface ProfileResponse {
  success: boolean;
  message: string;
  data: Profile;
}

const getMyProfile = async (): Promise<ProfileResponse> => {
  try {
    const response = await apiClient.get<ProfileResponse>(api.ENDPOINTS.USER.PROFILE);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to get profile');
    else
      throw new Error('Failed to get profile');
  }
};

export { 
  getMyProfile,
};