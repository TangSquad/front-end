import { Equipment } from './User';

type Logbook = {
  id: number;
  userId: number;
  date: string;
  thumbnailUrl: string;
  imageUrls: string[];
  title: string;
  contents: string;
  userCondition: string;
  location: string;
  equipment: LogbookEquipment;
  logIds: number[];
}

type CreateLogbook = Omit<Logbook, 'id' | 'userId' | 'location' | 'thumbnailUrl' | 'logIds'>;

type LogbookEquipment = Omit<Equipment, 'weight' | 'height'>;

type Log = {
  logbookId: number;
  location: string;
  weather: 'SUNNY' | 'CLOUDY' | 'MISTY' | 'RAINY' | 'THUNDER' | '';
  airTemp: number | null;
  surfTemp: number | null;
  bottTemp: number | null;
  viewSight: string;
  tide: '상' | '중' | '하' | '';  // 조류
  wave: '상' | '중' | '하' | '';
  surge: '상' | '중' | '하' | '';
  diveTime: string;
  subject: string;
  avgDepth: number | null;
  maxDepth: number | null;
  startBar: number | null;
  endBar: number | null;
}

type Weather = Pick<Log, 'weather' | 'airTemp' | 'surfTemp' | 'bottTemp'>;
type Etc = Pick<Log, 'avgDepth' | 'maxDepth' | 'startBar' | 'endBar'>;
type Environment = Pick<Log, 'tide' | 'wave' | 'surge' | 'viewSight'>;

type CreateLog = Omit<Log, 'logbookId'>;

export {
  Logbook,
  Log,
  CreateLogbook,
  CreateLog,
  LogbookEquipment,
  Weather,
  Etc,
  Environment,
};