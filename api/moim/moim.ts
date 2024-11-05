import axios from 'axios';
import apiClient from '../apiClient';
import { api } from '../../constants';

interface MoimType {
  id: number,
  userId: number,
  anonymous: boolean,
  moimName: string,
  moimIntro: string,
  moimDetails: string,
  limitPeople: number,
  expense: number,
  licenseLimit: string,
  locationOne: string,
  locationTwo: string,
  locationThree: string,
  age: number,
  moodOne: string,
  moodTwo: string,
}

const getMyMoim = async () => {
  try {
    const response = await apiClient.get<MoimType[]>(api.ENDPOINTS.MOIM.MOIM);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to get my moim');
    else
      throw new Error('Failed to get all moim');
  }
};

const getMoimById = async (moimId: number) => {
  try {
    const response = await apiClient.get<MoimType>(api.ENDPOINTS.MOIM.MOIM_BY_ID.replace('{moimId}', moimId.toString()));
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to get moim by id');
    else
      throw new Error('Failed to get moim');
  }
};

export {
  MoimType,
  getMyMoim,
  getMoimById,
};