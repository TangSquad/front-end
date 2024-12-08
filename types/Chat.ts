type ChatRoom = {
  id: string;
  name: string;
  type: 'MOIM' | 'DIVING';
};

type Message = {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
};

export {
  ChatRoom,
  Message,
};