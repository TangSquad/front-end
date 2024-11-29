type GatheringType = '다이빙' | '모임';
type SectionType = '찾기' | '내' | '좋아요 한';

interface Moim {
  id: number,
  userId: number,
  isPublic: boolean,
  thumbnailUrl: string,
  moimName: string,
  moimIntro: string,
  moimDetails: string,
  currentPeople: number,
  limitPeople: number,
  expense: number,
  licenseLimit: string,
  locations: string[],
  moods: string[],
  registeredUserIds: number[],
  age: string,
  chatRoomId: string,
}

interface Diving {
  id: number;
  userId: number;
  isPublic: boolean;
  thumbnailUrl: string;
  divingName: string;
  divingIntro: string;
  age: string;
  moods: string[];
  currentPeople: number;
  limitPeople: number;
  licenseLimit: string;
  startDate: string;
  endDate: string;
  location: string;
  registeredUserIds: number[];
  chatRoomId: string;
}

type CreateDiving = Omit<Diving, 'id' | 'userId' | 'currentPeople' | 'registeredUserIds' | 'chatRoomId'>;
type CreateMoim = Omit<Moim, 'id' | 'userId' | 'currentPeople' | 'registeredUserIds' | 'chatRoomId'>;

export {
  Moim,
  Diving,
  CreateMoim,
  CreateDiving,
  GatheringType,
  SectionType,
};