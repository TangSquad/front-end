type Logbook = {
  id: number;
  date: string;
  thumbnailUrl: string | null;
  title: string;
  contents: string;
  location: string;
  userConditiaon: string;
}

type Log = {
  logbookId: number | null;
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

export {
  Logbook,
  Log,
};