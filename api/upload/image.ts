import axios from 'axios';
import { api } from 'constants/';
import { getBaseUrl } from 'constants/api';
import { getHeaders } from '../headers';

const fileUploadClient = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${getHeaders()}`,
  },
});

interface Response {
  code: number;
  message: string;
  data: {
    url: string;
  };
}

const translateUrl = async (url: string) => {
  const formData = new FormData();
  formData.append('file', {
    uri: url,
    name: url.split('/').pop(),
    type: 'image/png',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any);
    
  try {
    const response = await fileUploadClient.post<Response>(api.ENDPOINTS.UPLOAD, formData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Axios failed to translate url');
    else
      throw new Error('Failed to translate url');
  }
};

export {
  translateUrl,
};