import axios from 'axios';
import apiClient from '../apiClient';
import { api } from 'constants/';
import { Profile, EditProfile } from 'types/User';

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

const getProfileById = async (userId: number): Promise<ProfileResponse> => {
  try {
    const response = await apiClient.get<ProfileResponse>(`${api.ENDPOINTS.USER.PROFILE}/${userId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Axios failed to get profile');
    else
      throw new Error('Failed to get profile');
  }
};

interface ProfileEditResponse {
  success: boolean;
  message: string;
  data: EditProfile;
}

const editMyProfile = async (profile: Profile): Promise<ProfileEditResponse> => {
  try {
    const response = await apiClient.put<ProfileEditResponse>(api.ENDPOINTS.USER.PROFILE, profile);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to edit profile');
    else
      throw new Error('Failed to edit profile');
  }
};

export { 
  getMyProfile,
  editMyProfile,
  getProfileById,
};