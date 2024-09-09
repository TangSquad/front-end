import axios from 'axios';
import apiClient from '../apiClient';
import { api } from '../../constants';

interface OrganizationResponseData {
  success: boolean;
  message: string;
  data: OrganizationType[];
}

interface OrganizationType {
  id: number;
  name: string;
  imageUrl: string;
}

const getOrganizations = async (): Promise<OrganizationResponseData> => {
  try {
    const response = await apiClient.get<OrganizationResponseData>(api.ENDPOINTS.CERTIFICATE.ORGANIZATION);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to get organizations');
    else
      throw new Error('Failed to get organizations');
  }
};

export { 
  getOrganizations,
  OrganizationType,
};
