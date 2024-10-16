import axios from 'axios';
import apiClient from '../apiClient';
import { api } from '../../constants';

import { EquipmentType } from './equipment';
import { IntroductionType } from './introduction';

interface ProfileType {
  userId: number;
  profileImageUrl: string;
  name: string;
  nickname: string;
  clubCount: number;
  divingCount: number;
  logBookCount: number;
  certificationName: string;
  certificationImageUrl: string;
  isLogbookOpen: boolean;
  isLikeOpen: boolean;
  isEquipmentOpen: boolean;
}

interface ProfileResponse {
  success: boolean;
  message: string;
  data: ProfileType;
}

type ProfileEditType = Partial<
  Omit<ProfileType, 'userId' | 'clubCount' | 'divingCount' | 'logBookCount' | 'certificationName' | 'certificationImageUrl' | 'isLikeOpen'>>
  & Partial<IntroductionType>
  & Partial<EquipmentType>;

interface ProfileEditResponse {
  success: boolean;
  message: string;
  data: ProfileEditType;
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

const editMyProfile = async (profile: ProfileEditType): Promise<ProfileEditResponse> => {
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
  ProfileType,
  ProfileEditType,
};