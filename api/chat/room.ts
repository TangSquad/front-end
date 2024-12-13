import axios from 'axios';
import apiClient from '../apiClient';
import { api } from 'constants/';
import { Message } from 'types/Chat';

const getUnreadMessages = async (roomId: string) => {
  try {
    const response = await apiClient.get<Message[]>(`${api.ENDPOINTS.ROOM.MESSAGE}/${roomId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
      throw new Error(error.response?.data.message || 'Axios failed to get unread messages');
    else
      throw new Error('Failed to get unread messages');
  }
};

export {
  getUnreadMessages,
};