import axios from 'axios';
import apiClient from '../apiClient';
import { api } from '../../constants';

interface AdditionalData {
  nickname: string;
  organizationId?: number;
  levelId?: number;
  certificateImage?: string;
  profileImage?: string;
}

interface AdditionalResponseData {
  success: boolean;
  message: string;
  data: boolean;
}

const postAdditional = async ({
  nickname,
  organizationId,
  levelId,
  certificateImage,
  profileImage,
}: AdditionalData): Promise<AdditionalResponseData> => {
  try {
    const response = await apiClient.post<AdditionalResponseData>(api.ENDPOINTS.AUTH.ADDITIONAL, {
      nickname,
      ...(organizationId !== undefined && { organizationId }),
      ...(levelId !== undefined && { levelId }),
      ...(certificateImage !== undefined && { certificateImage }),
      ...(profileImage !== undefined && { profileImage }),
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'Failed to additional information');
    } else {
      throw new Error('Failed to additional information');
    }
  }
};

export default postAdditional;