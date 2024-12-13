type ChatRoom = {
  id: string;
  name: string;
  type: 'MOIM' | 'DIVING';
};

type Message = {
  id: string;
  senderId: number;
  roomId: string;
  sender: string;
  message: string;
  createdAt: string;
};

export {
  ChatRoom,
  Message,
};