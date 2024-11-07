import axios from 'axios';
import apiClient from '../apiClient';
import { api } from '../../constants';

interface MyChatRoom {
  id: string;
  name: string;
  type: string;
}

const getMyChatRoom = async () => {
  try {
    const response = await apiClient.get<MyChatRoom[]>(api.ENDPOINTS.CHAT.ROOM.MY);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Failed to get chat room');
    else
      throw new Error('Failed to get chat room');
  }
};

export {
  getMyChatRoom,
};